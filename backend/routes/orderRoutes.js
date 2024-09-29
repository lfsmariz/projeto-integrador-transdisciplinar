import { Router } from "express";
import { createOrder } from "../usecases/order.js";

const router = Router();

router.post("/:userId/create-order", async (req, res) => {
    const { userId } = req.params;
    const { products } = req.body;
    console.log(userId, products);
    try {
        await createOrder(userId, products);
    } catch (error) {
        res.status(500).send("not created order");
        return;
    }
    res.send("created order");
});

export { router as orderRoutes };