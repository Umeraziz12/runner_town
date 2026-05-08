import { Router } from 'express';
import { signup, login, getMe } from '../controllers/authController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
const router = Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authenticateJWT, getMe);
export default router;
//# sourceMappingURL=authRoutes.js.map