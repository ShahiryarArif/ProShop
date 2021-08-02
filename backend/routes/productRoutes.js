import express from 'express';
const router = express.Router();
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

/*
We can do this way
router.get('/', getProducts);
*/
router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;
