import { z } from 'zod';
import { TerritorySchema } from '../domain/territory.js';
export const TerritoryClaimedPayloadSchema = z.object({
    territory: TerritorySchema,
    claimedBy: z.string().uuid(),
});
export const TerritoryContestedPayloadSchema = z.object({
    territoryId: z.string().uuid(),
    challengerId: z.string().uuid(),
    ownerId: z.string().uuid(),
});
export const TerritoryExpiredPayloadSchema = z.object({
    territoryId: z.string().uuid(),
});
//# sourceMappingURL=territory.events.js.map