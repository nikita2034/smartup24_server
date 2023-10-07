import mongoose, { Document, Schema } from 'mongoose';
export interface RequestDocument extends Document {
    requesterId: string;
    receiverId: string;
    status: string;
    // Другие поля вашей коллекции "Requests"
  }
  
  const requestSchema = new Schema<RequestDocument>({
    requesterId: { type: String, required: true },
    receiverId: { type: String, required: true },
    status: { type: String, required: true },
    // Определите другие поля согласно вашим требованиям
  });
  
  export const RequestModel = mongoose.model<RequestDocument>('Request', requestSchema);
