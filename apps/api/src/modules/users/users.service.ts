// apps/api/src/modules/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UsersRepository) {}

  async findAll() {
    return this.repo.findAll();
  }

  async create(data: { email: string; name?: string }) {
    return this.repo.create(data);
  }

  async remove(id: string) {
    return this.repo.softDelete(id);
  }
}