import { allProducts, getProductById, setEvaluation, getEvaluationsByProductId } from '../../usecases/product.js';
import Product from '../../repository/product.js';
import Evaluation from '../../repository/evaluation.js';

// Mocking the dependencies
jest.mock('../../repository/product.js');
jest.mock('../../repository/evaluation.js');

describe('Product Use Cases', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('allProducts should return all products with filters', async () => {
        const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
        Product.class.findAll.mockResolvedValue(products);

        const result = await allProducts();

        expect(result).toEqual(products);
        expect(Product.class.findAll).toHaveBeenCalledWith({ where: {} });
    });

    test('getProductById should return a product by id', async () => {
        const productId = 1;
        const product = { id: productId, name: 'Product 1' };
        Product.class.findOne.mockResolvedValue(product);

        const result = await getProductById(productId);

        expect(result).toEqual(product);
        expect(Product.class.findOne).toHaveBeenCalledWith({ where: { id: productId } });
    });

    test('getProductById should throw an error if product is not found', async () => {
        const productId = 1;
        Product.class.findOne.mockResolvedValue(null);

        await expect(getProductById(productId)).rejects.toThrow('Produto não encontrado');
    });

    test('setEvaluation should create a new evaluation', async () => {
        const evaluationData = { evaluation: 5, productId: 1, userId: 1, comment: 'Great product!' };
        Evaluation.class.create.mockResolvedValue(evaluationData);

        const result = await setEvaluation(1, 5, 1, 'Great product!');

        expect(result).toEqual(evaluationData);
        expect(Evaluation.class.create).toHaveBeenCalledWith(evaluationData);
    });

    test('getEvaluationsByProductId should return evaluations for a product', async () => {
        const productId = 1;
        const evaluations = [{ id: 1, evaluation: 5, productId, userId: 1, comment: 'Great product!' }];
        Evaluation.class.findAll.mockResolvedValue(evaluations);

        const result = await getEvaluationsByProductId(productId);

        expect(result).toEqual(evaluations);
        expect(Evaluation.class.findAll).toHaveBeenCalledWith({ where: { productId } });
    });
});
