import { z } from 'zod';
import { LatLngSchema } from '../geo/index.js';
export const PresenceJoinPayloadSchema = z.object({
    userId: z.string().uuid(),
    username: z.string(),
    position: LatLngSchema.optional(),
});
export const PresenceLeavePayloadSchema = z.object({
    userId: z.string().uuid(),
});
export const PresenceMovePayloadSchema = z.object({
    userId: z.string().uuid(),
    position: LatLngSchema,
    timestamp: z.number().int(),
});
//# sourceMappingURL=presence.events.js.map