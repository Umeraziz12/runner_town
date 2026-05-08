import { Router } from 'express';
import { authenticateJWT } from '../../middleware/authMiddleware.js';
import { signup, login, me } from './auth.controller.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authenticateJWT, me);

export default router;
