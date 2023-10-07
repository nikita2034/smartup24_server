// controllers/productController.ts
import { Request, Response } from 'express';
import ProductServise from '../services/ProductServise';

class ProductController {
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductServise.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new ProductController();
