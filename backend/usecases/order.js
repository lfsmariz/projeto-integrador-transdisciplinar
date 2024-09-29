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
            productId: product,
        }));

        const novoRegistro = await Order.class.bulkCreate(records);

        console.log('Novo registro criado na tabela de pedidos:', novoRegistro);
    } catch (error) {
        console.error('Erro ao criar registro na tabela de pedidos:', error);
    }
}