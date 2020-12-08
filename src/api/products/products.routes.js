import express from 'express';
const router = express.Router();
import ProductsService from './../../api/products/products.service.js';

const { getProducts, getProductById, getProductsByKey } = ProductsService;

router.route('/')
    .get(getProducts);
router.route('/by_key')
    .get(getProductsByKey);
router.route('/product/:id')
    .get(getProductById);



export default router

