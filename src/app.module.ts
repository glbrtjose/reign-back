import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HackerNewsModule } from './hacker-news/hacker-news.module';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from './database/database.module';
import { PostService } from './hacker-news/services/post/post.service';
import { PostController } from './hacker-news/controllers/post/post.controller';
import { postProviders } from './hacker-news/providers/post.providers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule,HttpModule, ScheduleModule.forRoot(), HackerNewsModule, ConfigModule.forRoot()],
  controllers: [AppController,PostController],
  providers: [AppService,PostService,...postProviders],
})
export class AppModule {}
