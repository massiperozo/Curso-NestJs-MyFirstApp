import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectModule } from './projects/project.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TaskModule, ProjectModule, AuthModule, UserModule],
  controllers: [HelloController],
})
export class AppModule {}
