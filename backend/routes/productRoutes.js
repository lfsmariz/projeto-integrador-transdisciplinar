import { Router } from "express";
import { allProducts, getProductById, setEvaluation, getEvaluationsByProductId } from "../usecases/product.js";
const router = Router();

router.get("/list-all", async (req, res) => {
    const { promotion, category } = req.query;
    let promotionBoolean;
    if (promotion !== undefined) {
        promotionBoolean = promotion === 'true';
    }
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
    const { evaluation, userId, comment } = req.body;
    try {
        await setEvaluation(productId, evaluation, userId, comment);
    } catch (error) {
        res.status(500).send("Erro ao criar a avaliação");
        return;
    }
    res.send("Avaliação criada com sucesso");
});

router.get("/evaluations/:productId", async (req, res) => {
    const { productId } = req.params;
    let evaluations
    try {
        evaluations = await getEvaluationsByProductId(productId);
    } catch (error) {
        res.status(500).send("Erro ao buscar as avaliações");
    }
    res.send(evaluations);
});
export { router as productRoutes };