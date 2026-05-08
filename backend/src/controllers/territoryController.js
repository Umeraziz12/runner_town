import { z } from 'zod';
import prisma from '../utils/prisma.js';
const captureSchema = z.object({
    geometry: z.array(z.object({
        lat: z.number(),
        lng: z.number(),
    })),
    area: z.number(),
});
export const captureTerritory = async (req, res) => {
    try {
        const { geometry, area } = captureSchema.parse(req.body);
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const territory = await prisma.territory.create({
            data: {
                ownerId: userId,
                geometry: JSON.stringify(geometry),
                area,
            },
        });
        res.status(201).json(territory);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.issues });
        }
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const getMyTerritories = async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const territories = await prisma.territory.findMany({
            where: { ownerId: userId },
            orderBy: { capturedAt: 'desc' },
        });
        res.json(territories.map((t) => ({
            ...t,
            geometry: JSON.parse(t.geometry),
        })));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
//# sourceMappingURL=territoryController.js.map