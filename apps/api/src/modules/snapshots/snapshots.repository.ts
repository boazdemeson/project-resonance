import { prisma } from '../../shared/prisma';

export class SnapshotsRepository {
  async listBySession(sessionId: string) {
    return prisma.snapshot.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(input: { sessionId: string; createdBy: string; note?: string; data: unknown }) {
    return prisma.snapshot.create({
      data: {
        sessionId: input.sessionId,
        createdBy: input.createdBy,
        note: input.note,
        data: input.data as any,
        immutable: true,
      },
    });
  }
}