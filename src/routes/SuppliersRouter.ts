import { Router } from 'express';
import SuppliersController from '../controllers/SuppliersController';

const router = Router();

router.get('/', SuppliersController.getSuppliers);

export default router;