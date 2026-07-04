import { prisma } from '../../shared/prisma';

export class UsersRepository {
  async findAll() {
    return prisma.user.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: { email: string; name?: string }) {
    return prisma.user.create({
      data,
    });
  }

  async softDelete(id: string) {
    await prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}