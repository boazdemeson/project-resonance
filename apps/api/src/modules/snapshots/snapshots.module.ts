import { Module } from '@nestjs/common';
import { SnapshotsController } from './snapshots.controller';
import { SnapshotsService } from './snapshots.service';
import { SnapshotsRepository } from './snapshots.repository';

@Module({
  controllers: [SnapshotsController],
  providers: [SnapshotsService, SnapshotsRepository],
})
export class SnapshotsModule {}