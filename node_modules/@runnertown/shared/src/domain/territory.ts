import { z } from 'zod';
import { PolygonSchema } from '../geo/index.js';

export const TerritoryStatusSchema = z.enum(['active', 'contested', 'expired']);
export type TerritoryStatus = z.infer<typeof TerritoryStatusSchema>;

export const TerritorySchema = z.object({
  id: z.string().uuid(),
  ownerId: z.string().uuid(),
  geometry: PolygonSchema,
  area: z.number().nonnegative(),
  capturedAt: z.coerce.date(),
  status: TerritoryStatusSchema.default('active'),
});
export type Territory = z.infer<typeof TerritorySchema>;
