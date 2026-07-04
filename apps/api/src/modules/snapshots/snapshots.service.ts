import { Injectable } from '@nestjs/common';
import { SnapshotsRepository } from './snapshots.repository';

@Injectable()
export class SnapshotsService {
  constructor(private readonly repo: SnapshotsRepository) {}

  async list(sessionId: string) {
    return this.repo.listBySession(sessionId);
  }

  async create(input: { sessionId: string; createdBy: string; note?: string; data: unknown }) {
    return this.repo.create(input);
  }
}