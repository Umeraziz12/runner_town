import { z } from 'zod';
export declare const CaptureTerritoryRequestSchema: z.ZodObject<{
    geometry: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
    area: z.ZodNumber;
}, z.core.$strip>;
export type CaptureTerritoryRequest = z.infer<typeof CaptureTerritoryRequestSchema>;
export declare const CaptureTerritoryResponseSchema: z.ZodObject<{
    id: z.ZodString;
    ownerId: z.ZodString;
    geometry: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
    area: z.ZodNumber;
    capturedAt: z.ZodCoercedDate<unknown>;
    status: z.ZodDefault<z.ZodEnum<{
        active: "active";
        contested: "contested";
        expired: "expired";
    }>>;
}, z.core.$strip>;
export type CaptureTerritoryResponse = z.infer<typeof CaptureTerritoryResponseSchema>;
export declare const ListTerritoriesResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    ownerId: z.ZodString;
    geometry: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
    area: z.ZodNumber;
    capturedAt: z.ZodCoercedDate<unknown>;
    status: z.ZodDefault<z.ZodEnum<{
        active: "active";
        contested: "contested";
        expired: "expired";
    }>>;
}, z.core.$strip>>;
export type ListTerritoriesResponse = z.infer<typeof ListTerritoriesResponseSchema>;
//# sourceMappingURL=territory.d.ts.map