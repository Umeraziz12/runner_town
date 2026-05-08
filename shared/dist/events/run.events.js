import { z } from 'zod';
import { GeoPointSchema } from '../geo/index.js';
import { RunStatusSchema } from '../domain/run.js';
export const RunStartPayloadSchema = z.object({
    runId: z.string().uuid(),
    runnerId: z.string().uuid(),
    startedAt: z.coerce.date(),
});
export const RunTickPayloadSchema = z.object({
    runId: z.string().uuid(),
    runnerId: z.string().uuid(),
    point: GeoPointSchema,
    distanceMeters: z.number().nonnegative(),
    durationSeconds: z.number().nonnegative(),
});
export const RunFinishPayloadSchema = z.object({
    runId: z.string().uuid(),
    runnerId: z.string().uuid(),
    endedAt: z.coerce.date(),
    status: RunStatusSchema,
    distanceMeters: z.number().nonnegative(),
    durationSeconds: z.number().nonnegative(),
});
//# sourceMappingURL=run.events.js.map