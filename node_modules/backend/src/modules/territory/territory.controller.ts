import type { Response } from 'express';
import { z } from 'zod';
import type { AuthRequest } from '../../middleware/authMiddleware.js';
import { CaptureTerritoryRequestSchema } from './territory.schema.js';
import {
  captureTerritory as captureTerritoryService,
  listMyTerritories,
  TerritoryError,
} from './territory.service.js';

const handleError = (error: unknown, res: Response) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({ errors: error.issues });
  }
  if (error instanceof TerritoryError) {
    return res.status(error.status).json({ message: error.message });
  }
  console.error(error);
  return res.status(500).json({ message: 'Internal server error' });
};

export const captureTerritory = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const input = CaptureTerritoryRequestSchema.parse(req.body);
    const result = await captureTerritoryService(userId, input);
    res.status(201).json(result);
  } catch (error) {
    handleError(error, res);
  }
};

export const getMyTerritories = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const result = await listMyTerritories(userId);
    res.json(result);
  } catch (error) {
    handleError(error, res);
  }
};
