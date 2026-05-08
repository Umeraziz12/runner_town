import { z } from 'zod';
import { PolygonSchema } from '../geo/index.js';
import { TerritorySchema } from '../domain/territory.js';

export const CaptureTerritoryRequestSchema = z.object({
  geometry: PolygonSchema,
  area: z.number().nonnegative(),
});
export type CaptureTerritoryRequest = z.infer<typeof CaptureTerritoryRequestSchema>;

export const CaptureTerritoryResponseSchema = TerritorySchema;
export type CaptureTerritoryResponse = z.infer<typeof CaptureTerritoryResponseSchema>;

export const ListTerritoriesResponseSchema = z.array(TerritorySchema);
export type ListTerritoriesResponse = z.infer<typeof ListTerritoriesResponseSchema>;
