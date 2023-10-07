// routes/partnerRoutes.ts

import express from 'express';
import { getPartnersWithProfiles } from '../controllers/PartnersController';

const router = express.Router();

// Определите конечную точку для получения списка партнеров пользователя с информацией о них
router.get('/user/:userId/partners', getPartnersWithProfiles);

export default router;
