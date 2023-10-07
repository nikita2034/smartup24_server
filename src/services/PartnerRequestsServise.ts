
import { RequestDocument, RequestModel } from '../models/PartnerRequests';

export async function getAllRequests(): Promise<RequestDocument[]> {
  try {
    const requests = await RequestModel.find();
    return requests;
  } catch (error) {
    throw new Error('Error fetching requests');
  }
}