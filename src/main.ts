import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import {HttpExceptionFilter} from "src/filters/HttpExceptionFilter"

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 3.配置静态资源目录
  // app.useStaticAssets('public');
  
  // 3.1 设置虚拟路径
  app.useStaticAssets('static', {
    prefix: '/static/'
  })
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();