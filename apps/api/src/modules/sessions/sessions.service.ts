import { Injectable } from '@nestjs/common';
import { SessionsRepository } from './sessions.repository';

@Injectable()
export class SessionsService {
  constructor(private readonly repo: SessionsRepository) {}

  async list(ownerId: string) {
    return this.repo.listByOwner(ownerId);
  }

  async create(data: { title: string; description?: string; ownerId: string }) {
    return this.repo.create(data);
  }

  async remove(id: string) {
    return this.repo.softDelete(id);
  }
}