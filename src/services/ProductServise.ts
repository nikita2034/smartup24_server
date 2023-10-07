// ProductService.ts
import Product, { IProduct } from '../models/Product';

class ProductService {
  async getAllProducts(): Promise<IProduct[]> {
    try {
      // return await Product.find().exec();
      return await Product.find();
    } catch (error) {
      throw new Error(`Error while fetching products: `);
    }
  }
}

export default new ProductService();