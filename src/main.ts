import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostService } from './hacker-news/services/post/post.service';
import { TasksService } from './hacker-news/tasks/tasks.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000, async () => {
    const _TasksService = app.get(TasksService);
    const _PostService = app.get(PostService);
    const result:any = await _TasksService.handleCron();
    result
    .subscribe((res)=>{
      const {data} = res;
      _PostService.insertMany(data.hits);});
  });
}
bootstrap();
