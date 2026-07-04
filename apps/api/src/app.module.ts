import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { SessionsModule } from './modules/sessions/sessions.module';
import { SnapshotsModule } from './modules/snapshots/snapshots.module';

@Module({
  imports: [UsersModule, SessionsModule, SnapshotsModule],
})
export class AppModule {}