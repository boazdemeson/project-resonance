import { prisma } from '../../shared/prisma';

export class SessionsRepository {
  async listByOwner(ownerId: string) {
    return prisma.session.findMany({
      where: { ownerId, deletedAt: null },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async create(data: { title: string; description?: string; ownerId: string }) {
    return prisma.session.create({ data });
  }

  async softDelete(id: string) {
    await prisma.session.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}