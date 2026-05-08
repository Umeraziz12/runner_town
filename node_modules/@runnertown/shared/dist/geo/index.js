import { z } from 'zod';
export const LatLngSchema = z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
});
export const GeoPointSchema = LatLngSchema.extend({
    altitude: z.number().nullable().optional(),
    accuracy: z.number().nonnegative().nullable().optional(),
    speed: z.number().nullable().optional(),
    heading: z.number().nullable().optional(),
    timestamp: z.number().int(),
});
export const BoundingBoxSchema = z.object({
    northEast: LatLngSchema,
    southWest: LatLngSchema,
});
export const PolygonSchema = z.array(LatLngSchema).min(3);
//# sourceMappingURL=index.js.map