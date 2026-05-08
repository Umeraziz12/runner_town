import { z } from 'zod';
import { GeoPointSchema } from '../geo/index.js';

export const RunStatusSchema = z.enum(['active', 'paused', 'completed', 'discarded']);
export type RunStatus = z.infer<typeof RunStatusSchema>;

export const RunSchema = z.object({
  id: z.string().uuid(),
  runnerId: z.string().uuid(),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date().nullable(),
  status: RunStatusSchema,
  distanceMeters: z.number().nonnegative(),
  durationSeconds: z.number().nonnegative(),
  averagePace: z.number().nonnegative().nullable(),
  path: z.array(GeoPointSchema),
});
export type Run = z.infer<typeof RunSchema>;
