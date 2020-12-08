import SuccessHandlerUtil from './../../util/success-handler.util.js';
import Product from './../../model/schema/products.schema.js';

const { handleGet } = SuccessHandlerUtil;

class ProductsService {
    static async getProducts(req, res, next) {
        try {
            const products = await Product.find({});
            handleGet(res, next, products)
        } catch (e) {
            next(e)
        }
    }
    static async getProductById(req, res, next) {
        try {
            const product = await Product.findById(req.params.id);
            handleGet(res, next, product);
        } catch (e) {
            next(e)
        }
    }
    static async getProductsByKey(req, res, next) {
        try {
            const query = {};
            Object.keys(req.body).forEach(k => {
                query[k] = {$regex: new RegExp(req.body[k], 'i')}
            });
            const products = await Product.find(query);
            handleGet(res, next, products);
        } catch (e) {
            next(e)
        }
    }
}

export default ProductsService;