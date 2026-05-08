import { z } from 'zod';
export declare const LatLngSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, z.core.$strip>;
export type LatLng = z.infer<typeof LatLngSchema>;
export declare const GeoPointSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
    altitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    accuracy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    speed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    heading: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodNumber;
}, z.core.$strip>;
export type GeoPoint = z.infer<typeof GeoPointSchema>;
export declare const BoundingBoxSchema: z.ZodObject<{
    northEast: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>;
    southWest: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type BoundingBox = z.infer<typeof BoundingBoxSchema>;
export declare const PolygonSchema: z.ZodArray<z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, z.core.$strip>>;
export type Polygon = z.infer<typeof PolygonSchema>;
//# sourceMappingURL=index.d.ts.map