import { Router } from "express";
import { addToCart, removeFromCart } from "../usecases/cart.js";
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