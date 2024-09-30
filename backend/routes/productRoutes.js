import { Router } from "express";
import { allProducts, getProductById, setEvaluation } from "../usecases/product.js";
const router = Router();

router.get("/list-all", async (req, res) => {
    const { promotion, category } = req.query;
    const promotionBoolean = promotion === 'true';
    let products = {};
    try {
        products = await allProducts(promotionBoolean, category);
    } catch (error) {
        res.status(500).send("registro inválido");
        return;
    }
    res.send(products);
});

router.get("/:productId", async (req, res) => {
    const { productId } = req.params;
    let product
    console.log(productId)
    try {
        product = await getProductById(productId);
    } catch (error) {
        res.status(500).send("Erro ao buscar o produto");
        return;
    }
    res.send(product);
});

router.post("/:productId/evaluation", async (req, res) => {
    const { productId } = req.params;
    const { evaluation, userId } = req.body;
    try {
        await setEvaluation(productId, evaluation, userId);
    } catch (error) {
        res.status(500).send("Erro ao criar a avaliação");
        return;
    }
    res.send("Avaliação criada com sucesso");
}); 

export { router as productRoutes };