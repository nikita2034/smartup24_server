// request.controller.ts
import { Request, Response } from 'express';
import { getAllRequests } from '../services/PartnerRequestsServise';

export async function getRequests(req: Request, res: Response): Promise<void> {
  try {
    const requests = await getAllRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
