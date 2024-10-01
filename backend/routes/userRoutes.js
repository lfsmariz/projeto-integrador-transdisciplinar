import { Router } from "express";
import { register, login, addChat, chatMessages, closeChat } from "../usecases/user.js";

const router = Router();

router.post("/register", async (req, res) => {
    const { name, password, email, cpf } = req.body;
    try {
        await register(name, cpf, email, password);
    } catch (error) {
        res.status(500).send("invalid register");
        return;
    }
    res.send(`Nome: ${name}, Senha: ${password}, Email: ${email}`);
});

router.post("/login", async (req, res) => {
    const { name, password, email } = req.body;
    try {
        await login(email, password);
    } catch (error) {
        res.status(500).send("invalid login");
        return;
    }
    res.send(`Nome: ${name}, Senha: ${password}, Email: ${email}`);
});

router.post("/chat", async (req, res) => {
    const { owner, message } = req.body;
    try {
        const newChat = await addChat(+owner, message);
        res.send(newChat);
    } catch (error) {
        res.status(500).send("invalid chat");
        return;
    }
});

router.post("/close-chat/:chatId", async (req, res) => {
    const { chatId } = req.params;
    try {
        await closeChat(chatId);
        res.send("closed");
    } catch (error) {
        res.status(500).send("invalid chat");
        return;
    }
});

router.get("/:ownerId/chat", async (req, res) => {
    const { ownerId } = req.params;
    try {
        const messages = await chatMessages(+ownerId);
        res.send(messages);
    } catch (error) {
        res.status(500).send("invalid chat");
        return;
    }
});

export { router as userRoutes };