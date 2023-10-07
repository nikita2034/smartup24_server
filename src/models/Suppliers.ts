import mongoose, { Document, Schema } from 'mongoose';

export interface SupplierDocument extends Document {
  id: number;
  title: string;
  logo: string;
  categories:[]
  // Другие поля вашей коллекции "Поставщики"
}

const supplierSchema = new Schema<SupplierDocument>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  logo: { type: String, required: true },
  categories: [{ type: String }], 
  // Определите другие поля согласно вашим требованиям
});

export const SupplierModel = mongoose.model<SupplierDocument>('Supplier', supplierSchema);