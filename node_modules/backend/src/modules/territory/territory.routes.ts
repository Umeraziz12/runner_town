import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware.js';
import { captureTerritory, getMyTerritories } from './territory.controller.js';

const router = Router();

router.post('/capture', authenticateJWT, captureTerritory);
router.get('/my', authenticateJWT, getMyTerritories);

export default router;
