
import { Request, Response } from 'express';
import { getPartnersWithProfilesByUserId} from '../services/PartnersServise'

export async function getPartnersWithProfiles(req: Request, res: Response): Promise<void> {
  const userId = req.params.userId;

  try {
    const partners = await getPartnersWithProfilesByUserId(userId);
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}