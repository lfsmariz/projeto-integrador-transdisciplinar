import { createOrder, updateStatus, getOrderById, getOrdersByUserId } from '../../usecases/order.js';
import Order from '../../repository/order.js';
import User from '../../repository/user.js';
import Product from '../../repository/product.js';

// Mocking the dependencies
jest.mock('../../repository/order.js');
jest.mock('../../repository/user.js');
jest.mock('../../repository/product.js');

describe('Order Use Cases', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('createOrder should create a new order', async () => {
        const userId = 1;
        const products = [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }];
        const user = { id: userId, points: 0, save: jest.fn() };
        const discount = 10;

        User.class.findByPk.mockResolvedValue(user);
        Product.class.findAll.mockResolvedValue([{ id: 1, price: 100 }, { id: 2, price: 200 }]);
        Order.class.bulkCreate.mockResolvedValue([]);

        const orderId = await createOrder(userId, products);

        expect(orderId).toBeDefined();
        expect(Order.class.bulkCreate).toHaveBeenCalled();
        expect(user.save).toHaveBeenCalled();
    });

    test('updateStatus should update the order status', async () => {
        const orderId = 'some-order-id';
        const status = 'delivered';
        const order = { status: '', save: jest.fn() };

        Order.class.findByPk.mockResolvedValue(order);

        await updateStatus(orderId, status);

        expect(order.status).toBe(status);
        expect(order.save).toHaveBeenCalled();
    });

    test('getOrderById should return the order', async () => {
        const orderId = 'some-order-id';
        const order = [{ orderId }];

        Order.class.findAll.mockResolvedValue(order);

        const result = await getOrderById(orderId);

        expect(result).toEqual(order);
    });

    test('getOrdersByUserId should return orders grouped by orderId', async () => {
        const userId = 1;
        const orders = [
            { orderId: 'order1', userId },
            { orderId: 'order1', userId },
            { orderId: 'order2', userId },
        ];

        Order.class.findAll.mockResolvedValue(orders);

        const result = await getOrdersByUserId(userId);

        expect(result).toHaveLength(2); // Deve retornar 2 grupos de pedidos
    });
});