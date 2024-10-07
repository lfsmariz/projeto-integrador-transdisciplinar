import { Router } from "express";
import { createOrder, getOrderById, getOrdersByUserId, updateStatus } from "../usecases/order.js";

const router = Router();

router.post("/:userId/create-order", async (req, res) => {
    const { userId } = req.params;
    const { products, discount } = req.body;
    try {
        const orderId = await createOrder(userId, products, discount);
        res.send(orderId);
    } catch (error) {
        res.status(500).send("not created order");
        return;
    }
});

router.get("/:orderId", async (req, res) => {
    const { orderId } = req.params;
    let order;
    try {
        order = await getOrderById(orderId);
    } catch (error) {
        res.status(500).send("not found order");
        return;
    }
    res.send(order);
});

router.get("/:userId/list-orders", async (req, res) => {
    const { userId } = req.params;
    let orders;
    try {
        orders = await getOrdersByUserId(userId);
    } catch (error) {
        res.status(500).send("not found orders");
    }
    res.send(orders);
});

router.put("/:orderId/update-status", async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;
    try {
        await updateStatus(orderId, status);
    } catch (error) {
        res.status(500).send("not updated status");
    }
});

export { router as orderRoutes };