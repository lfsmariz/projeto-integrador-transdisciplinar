import { Router } from "express";
import { addToCart, removeFromCart, addCustomizationToCart, listCart } from "../usecases/cart.js";
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

router.get("/list-cart", async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    try {
        const cart = await listCart(userId);
        res.send(cart);
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