import mongoose, { Document, Schema, Types } from 'mongoose';

export interface PartnerDocument extends Document {
  userId: Types.ObjectId;
  partnerId: Types.ObjectId;
  status: string;
}

const partnerSchema = new Schema<PartnerDocument>({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  partnerId: { type: Types.ObjectId, ref: 'User', required: true },
  status: { type: String, required: true },
});

export const PartnerModel = mongoose.model<PartnerDocument>('Partner', partnerSchema);
