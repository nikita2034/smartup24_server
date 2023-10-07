import { SupplierDocument, SupplierModel } from '../models/Suppliers';

class SuppliersService{
async getAllSuppliers(): Promise<SupplierDocument[]> {
  try {
    const suppliers = await SupplierModel.find();
    return suppliers;
  } catch (error) {
    throw new Error('Error fetching suppliers');
  }
}
}
export default new SuppliersService();