import Order from "../repository/order.js";
import User from "../repository/user.js";
import Product from "../repository/product.js";
import { v4 as uuidv4 } from "uuid";

const OrderStatus = {
    PREPARING: 'preparing',
    DELIVERING: 'delivering',
    DELIVERED: 'delivered',
};

export async function createOrder(userId, products) {
    try {
        const user = await User.class.findByPk(+userId);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        const uuid = uuidv4();
        const records = products.map(product => ({
            orderId: uuid,
            userId: user.id,
            productId: product.id,
            quantity: product.quantity,
            status: OrderStatus.PREPARING,
        }));

        await updatePoints(user, products);
        
        const newOrder = await Order.class.bulkCreate(records);

        console.log('Novo registro criado na tabela de pedidos:', newOrder);
        return uuid;
    } catch (error) {
        console.error('Erro ao criar registro na tabela de pedidos:', error);
    }
}

async function updatePoints(user, products) {
    try {
        const productIds = products.map(product => product.id);
        const foundProducts = await Product.class.findAll({ where: { id: productIds } });

        if (foundProducts.length !== products.length) {
            throw new Error('Um ou mais produtos não foram encontrados');
        }

        let totalPrice = foundProducts.reduce((total, product) => {
            const productPrice = product.price;
            const productQuantity = products.find(p => p.id === product.id).quantity;
            return total + (productPrice * productQuantity);
        }, 0);

        totalPrice += totalPrice * 0.1;
        user.points += Math.floor(totalPrice);
        await user.save();

    } catch (error) {
        console.error('Erro ao atualizar pontos do usuário:', error);
    }
}

export async function updateStatus(orderId, status) {
    try {
        const order = await Order.class.findByPk(orderId);
        order.status = status;
        await order.save();
    } catch (error) {
        console.error('Erro ao atualizar status do pedido:', error);
    }
}

export async function getOrderById(orderId) {
    try {
        const order = await Order.class.findAll({ where: { orderId } });
        return order;
    } catch (error) {
        console.error('Erro ao buscar pedido:', error);
        throw error;
    }
}

export async function getOrdersByUserId(userId) {
    try {
        const orders = await Order.class.findAll({ where: { userId } });
        const groupedOrders = orders.reduce((acc, order) => {
            const orderId = order.orderId;
            if (!acc[orderId]) {
                acc[orderId] = [];
            }
            acc[orderId].push(order);
            return acc;
        }, {});
        return Object.values(groupedOrders);
    } catch (error) {
        console.error('Erro ao buscar pedidos do usuário:', error);
        throw error;
    }
}