import { Router } from "express";
import { addToCart, removeFromCart, addCustomizationToCart, listCart } from "../usecases/cart.js";
import { retrieveDiscount } from "../usecases/user.js";
const router = Router();

router.post("/add-to-cart", async (req, res) => {
    const { userId, productId, quantity } = req.body;
    console.log(userId, productId, quantity);
    try {
        await addToCart(userId, productId, quantity);
    } catch (error) {
        res.status(500).send("not added to cart");
        return;
    }
    res.send("added to cart");
});

router.post("/add-customization-to-cart", async (req, res) => {
    const { userId, productId, customization } = req.body;
    console.log(userId, productId, customization);
    try {
        await addCustomizationToCart(userId, productId, customization);
    } catch (error) {
        res.status(500).send("not added customization to cart");
    }
    res.send("added customization to cart");
});

router.get("/:userId", async (req, res) => {
    const { userId } = req.params; // Captura o userId dos parâmetros da rota
    const { discount } = req.query; // Captura o parâmetro de query 'discount'
    console.log(userId, discount); // Adiciona o log do desconto
    try {
        const cart = await listCart(+userId);
        const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        let voucher = 0;
        if (discount) {
            voucher = await retrieveDiscount(discount) * 0.01;
        }
        const resp = {
            voucher,
            totalPrice,
            cart
        }

        res.send(resp);
    } catch (error) {
        res.status(500).send("not listed cart");
    }
});

router.post("/remove-from-cart", async (req, res) => {
    const { userId, productId } = req.body;
    console.log(userId, productId);
    try {
        await removeFromCart(userId, productId);
    } catch (error) {
        res.status(500).send("not removed from cart");
    }
    res.send("removed from cart");
});

export { router as cartRoutes };