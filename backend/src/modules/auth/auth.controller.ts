import type { Request, Response } from 'express';
import { z } from 'zod';
import type { AuthRequest } from '../../middleware/authMiddleware.js';
import { SignupRequestSchema, LoginRequestSchema } from './auth.schema.js';
import { signupUser, loginUser, getMe, AuthError } from './auth.service.js';

const handleError = (error: unknown, res: Response) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({ errors: error.issues });
  }
  if (error instanceof AuthError) {
    return res.status(error.status).json({ message: error.message });
  }
  console.error(error);
  return res.status(500).json({ message: 'Internal server error' });
};

export const signup = async (req: Request, res: Response) => {
  try {
    const input = SignupRequestSchema.parse(req.body);
    const result = await signupUser(input);
    res.status(201).json(result);
  } catch (error) {
    handleError(error, res);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const input = LoginRequestSchema.parse(req.body);
    const result = await loginUser(input);
    res.json(result);
  } catch (error) {
    handleError(error, res);
  }
};

export const me = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const result = await getMe(userId);
    res.json(result);
  } catch (error) {
    handleError(error, res);
  }
};
