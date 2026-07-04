import { Controller, Get, Post, Body, Query, UsePipes } from '@nestjs/common';
import { SnapshotsService } from './snapshots.service';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { createSnapshotSchema } from './schemas/create-snapshot.schema';

@Controller('snapshots')
export class SnapshotsController {
  constructor(private readonly service: SnapshotsService) {}

  @Get()
  async list(@Query('sessionId') sessionId: string) {
    return this.service.list(sessionId);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createSnapshotSchema))
  async create(@Body() body: any) {
    return this.service.create(body);
  }
}