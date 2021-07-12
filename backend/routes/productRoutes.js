import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @desc  Fetch all products
// @route  GET/api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); //{} mean return everything

    res.json(products);
  })
);

// @desc  Fetch single products
// @route  GET/api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      /* res.status(404).json({ message: 'Product not found' });
        Because we have custom error handler we will do like this
      */
      res.status(404); // If we donot write this it will be 500 by default
      throw new Error('Product not found');
    }
  })
);

export default router;
