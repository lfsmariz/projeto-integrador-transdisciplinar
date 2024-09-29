import Cart from "../repository/cart.js";
import User from "../repository/user.js";
import Product from "../repository/product.js";

export async function addToCart(userId, productId, quantity) {
    try {
        const user = await User.class.findByPk(userId);
        const product = await Product.class.findByPk(productId);

        if (!user || !product) {
            throw new Error('Usuário ou produto não encontrado');
        }
        const novoRegistro = await Cart.class.create({
            userId: user.id,
            productId: product.id,
            quantity: quantity,
        });
        console.log('Novo registro criado no carrinho:', novoRegistro);
    } catch (error) {
        console.error('Erro ao criar registro no carrinho:', error);
        throw error;
    }
}

export async function removeFromCart(userId, productId) {
    try {
        await Cart.class.destroy({
            where: { userId, productId }
        });
    } catch (error) {
        console.error('Erro ao remover registro do carrinho:', error);
        throw error;
    }
}