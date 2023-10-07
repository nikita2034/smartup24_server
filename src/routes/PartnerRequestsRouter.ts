// request.router.ts
import { Router } from 'express';
import { getRequests } from '../controllers/PartnerRequestsController'

const router = Router();

router.get('/', getRequests);

export default router;