import { Router } from "express";
import { register, login } from "../usecases/account.js";

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

export { router as userRoutes };