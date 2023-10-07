import { PartnerModel, PartnerDocument } from '../models/Partners';

export async function getPartnersWithProfilesByUserId(userId: string): Promise<PartnerDocument[]> {
  return PartnerModel.find({ userId }).populate('partnerId', 'username email role').exec();
}