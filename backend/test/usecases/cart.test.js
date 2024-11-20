import { addToCart, addCustomizationToCart, listCart, removeFromCart } from '../../usecases/cart.js';
import Cart from '../../repository/cart.js';
import User from '../../repository/user.js';
import Product from '../../repository/product.js';

// Mocking the dependencies
jest.mock('../../repository/cart.js');
jest.mock('../../repository/user.js');
jest.mock('../../repository/product.js');

describe('Cart Use Cases', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('addToCart should add a product to the cart', async () => {
        const userId = 1;
        const productId = 1;
        const quantity = 2;
        const user = { id: userId };
        const product = { id: productId };

        User.class.findByPk.mockResolvedValue(user);
        Product.class.findByPk.mockResolvedValue(product);
        Cart.class.create.mockResolvedValue({ userId, productId, quantity });

        await addToCart(userId, productId, quantity);

        expect(Cart.class.create).toHaveBeenCalledWith({
            userId: user.id,
            productId: product.id,
            quantity: quantity,
        });
    });

    test('addToCart should throw an error if user or product is not found', async () => {
        const userId = 1;
        const productId = 1;
        const quantity = 2;

        User.class.findByPk.mockResolvedValue(null); // Simulando usuário não encontrado

        await expect(addToCart(userId, productId, quantity)).rejects.toThrow('Usuário ou produto não encontrado');
    });

    test('addCustomizationToCart should update customization in the cart', async () => {
        const userId = 1;
        const productId = 1;
        const customization = { color: 'red' };

        await addCustomizationToCart(userId, productId, customization);

        expect(Cart.class.update).toHaveBeenCalledWith({ customization }, { where: { userId, productId } });
    });

    test('listCart should return the cart items for a user', async () => {
        const userId = 1;
        const cartItems = [{ userId, productId: 1, quantity: 2 }];

        Cart.class.findAll.mockResolvedValue(cartItems);

        const result = await listCart(userId);

        expect(result).toEqual(cartItems);
    });

    test('removeFromCart should remove a product from the cart', async () => {
        const userId = 1;
        const productId = 1;

        await removeFromCart(userId, productId);

        expect(Cart.class.destroy).toHaveBeenCalledWith({
            where: { userId, productId }
        });
    });
});
