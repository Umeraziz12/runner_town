import { z } from 'zod';
import { TerritorySchema } from '../domain/territory.js';

export const TerritoryClaimedPayloadSchema = z.object({
  territory: TerritorySchema,
  claimedBy: z.string().uuid(),
});
export type TerritoryClaimedPayload = z.infer<typeof TerritoryClaimedPayloadSchema>;

export const TerritoryContestedPayloadSchema = z.object({
  territoryId: z.string().uuid(),
  challengerId: z.string().uuid(),
  ownerId: z.string().uuid(),
});
export type TerritoryContestedPayload = z.infer<typeof TerritoryContestedPayloadSchema>;

export const TerritoryExpiredPayloadSchema = z.object({
  territoryId: z.string().uuid(),
});
export type TerritoryExpiredPayload = z.infer<typeof TerritoryExpiredPayloadSchema>;
