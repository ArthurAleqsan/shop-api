import express from 'express'
const router = express.Router()
import ProductsService from '../services/products.service.js'

const { getProducts, getProductById, getProductsByKey } = ProductsService

/**
 * @desc    Get all products
 * @route   GET /api/products
 * @access  Public
 **/

router.route('/')
    .get(getProducts)

/**
* @desc    Get products by searching key
* @route   GET /api/products/by_key
* @access  Public
**/

router.route('/by_key')
    .get(getProductsByKey)

/**
 * @desc    Get single product by id
 * @route   GET /api/product/:id
 * @access  Public
 **/


router.route('/product/:id')
    .get(getProductById)

export default router

