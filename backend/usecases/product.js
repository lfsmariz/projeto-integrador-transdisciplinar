import Product from "../repository/product.js";
import Evaluation from "../repository/evaluation.js";
export const allProducts = async (promotion, category) => {
    try {
        const filter = {};
        if (promotion !== undefined) {
            filter.promotion = promotion;
        }
        if (category !== undefined) {
            filter.category = category;
        }

        const products = await Product.class.findAll({ where: filter });
        return products;
    } catch (error) {
        console.error("Erro ao recuperar todos os produtos:", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const product = await Product.class.findOne({ where: { id } });
        if (!product) {
            throw new Error("Produto não encontrado");
        }
        return product;
    } catch (error) {
        console.error("Erro ao recuperar o produto:", error);
        throw error;
    }
};

export const setEvaluation = async (id, evaluation, userId, comment) => {
    try {
        const newEvaluation = await Evaluation.class.create({ evaluation, productId: id, userId, comment });
        return newEvaluation;
    } catch (error) {
        console.error("Erro ao criar a avaliação:", error);
        throw error;
    }
};

export const getEvaluationsByProductId = async (id) => {
    try {
        const evaluations = await Evaluation.class.findAll({ where: { productId: id } });
        return evaluations;
    } catch (error) {
        console.error("Erro ao buscar as avaliações:", error);
        throw error;
    }
};