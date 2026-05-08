import prisma from '../../utils/prisma.js';
import type {
  CaptureTerritoryRequest,
  CaptureTerritoryResponse,
  ListTerritoriesResponse,
} from './territory.schema.js';

export class TerritoryError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export const captureTerritory = async (
  ownerId: string,
  input: CaptureTerritoryRequest,
): Promise<CaptureTerritoryResponse> => {
  const created = await prisma.territory.create({
    data: {
      ownerId,
      geometry: JSON.stringify(input.geometry),
      area: input.area,
    },
  });

  return {
    id: created.id,
    ownerId: created.ownerId,
    geometry: input.geometry,
    area: created.area,
    capturedAt: created.capturedAt,
    status: 'active',
  };
};

export const listMyTerritories = async (ownerId: string): Promise<ListTerritoriesResponse> => {
  const territories = await prisma.territory.findMany({
    where: { ownerId },
    orderBy: { capturedAt: 'desc' },
  });

  return territories.map((t) => ({
    id: t.id,
    ownerId: t.ownerId,
    geometry: JSON.parse(t.geometry),
    area: t.area,
    capturedAt: t.capturedAt,
    status: 'active' as const,
  }));
};
