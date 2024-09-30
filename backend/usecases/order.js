import Order from "../repository/order.js";
import User from "../repository/user.js";
import { v4 as uuidv4 } from "uuid";


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
        }));

        const newOrder = await Order.class.bulkCreate(records);

        console.log('Novo registro criado na tabela de pedidos:', newOrder);
        return uuid;
    } catch (error) {
        console.error('Erro ao criar registro na tabela de pedidos:', error);
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