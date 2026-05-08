import { z } from 'zod';
import { PolygonSchema } from '../geo/index.js';
import { TerritorySchema } from '../domain/territory.js';
export const CaptureTerritoryRequestSchema = z.object({
    geometry: PolygonSchema,
    area: z.number().nonnegative(),
});
export const CaptureTerritoryResponseSchema = TerritorySchema;
export const ListTerritoriesResponseSchema = z.array(TerritorySchema);
//# sourceMappingURL=territory.js.map