import type { Response } from 'express';
import type { AuthRequest } from '../middleware/authMiddleware.js';
export declare const captureTerritory: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMyTerritories: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=territoryController.d.ts.map