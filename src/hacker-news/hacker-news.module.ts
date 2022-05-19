import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { postProviders } from './providers/post.providers';
import { PostService } from './services/post/post.service';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports:[HttpModule, DatabaseModule],
  providers: [TasksService,PostService,...postProviders]
})
export class HackerNewsModule {}
