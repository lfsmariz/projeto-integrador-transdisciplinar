import { Router } from "express";
import { allProducts, getProductById } from "../usecases/product.js";
const router = Router();

router.get("/list-all", async (req, res) => {
    let products = {}
    try {
        products = await allProducts();
    } catch (error) {
        res.status(500).send("invalid register");
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

export { router as productRoutes };