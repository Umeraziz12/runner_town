import { z } from 'zod';
import { LatLngSchema } from '../geo/index.js';

export const PresenceJoinPayloadSchema = z.object({
  userId: z.string().uuid(),
  username: z.string(),
  position: LatLngSchema.optional(),
});
export type PresenceJoinPayload = z.infer<typeof PresenceJoinPayloadSchema>;

export const PresenceLeavePayloadSchema = z.object({
  userId: z.string().uuid(),
});
export type PresenceLeavePayload = z.infer<typeof PresenceLeavePayloadSchema>;

export const PresenceMovePayloadSchema = z.object({
  userId: z.string().uuid(),
  position: LatLngSchema,
  timestamp: z.number().int(),
});
export type PresenceMovePayload = z.infer<typeof PresenceMovePayloadSchema>;
