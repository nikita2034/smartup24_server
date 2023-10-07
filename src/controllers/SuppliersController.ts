import { Request, Response } from 'express';
import SuppliersServise from '../services/SuppliersServise';

class SuppliersController {
async getSuppliers(req: Request, res: Response): Promise<void> {
  try {
    const suppliers = await SuppliersServise.getAllSuppliers();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
}
export default new SuppliersController();
// export default {
//   getSuppliers
// };