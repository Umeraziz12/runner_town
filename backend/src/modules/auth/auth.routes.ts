import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware.js';
import { authLimiter } from '../../middleware/rateLimit.js';
import { signup, login, me } from './auth.controller.js';

const router = Router();

router.post('/signup', authLimiter, signup);
router.post('/login', authLimiter, login);
router.get('/me', authenticateJWT, me);

export default router;
