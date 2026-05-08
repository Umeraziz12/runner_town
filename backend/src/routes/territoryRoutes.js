import { Router } from 'express';
import { captureTerritory, getMyTerritories } from '../controllers/territoryController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
const router = Router();
router.post('/capture', authenticateJWT, captureTerritory);
router.get('/my', authenticateJWT, getMyTerritories);
export default router;
//# sourceMappingURL=territoryRoutes.js.map