import "reflect-metadata"
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { CatsModule } from './cat/cat.module';
import { FishModule } from './fish/fish.module';
import { SysModule } from './sys/sys.module';
import { MatieralsModule } from './matierals/matierals.module';
import { MySQLModule } from "./mysql/mysql.module"
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from "./middlewares/LoggerMiddleware";
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from "./interceptors";
import { MYSQL } from "../confs"
import { WithdrawModule } from './withdraw/withdraw.module';
import { BillModule } from './bill/bill.module';
import { UploadModule } from "./upload/upload.module";
// MySQLModule.forRoot(MYSQL),
@Module({
  imports: [CatsModule, FishModule, SysModule, MatieralsModule,
    TypeOrmModule.forRoot({
      type: "mysql", //数据库类型
      username: "root", //账号
      password: "Welcome1*", //密码
      host: "10.1.128.114", //host
      port: 3307, //
      database: "scb_bill", //库名
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10,//重试连接数据库的次数
      autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
      // 果果不使用 autoLoadEntities: true, 应该使用下面一行
      // entities: [BusinessChannel], // 确保包含你的实体 
    }),
    TypeOrmModule.forRoot({
      name: 'base',
      type: "mysql", //数据库类型
      username: "root", //账号
      password: "Welcome1*", //密码
      host: "10.1.128.114", //host
      port: 3307, //
      database: "scb_base", //库名
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10,//重试连接数据库的次数
      autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
      // 果果不使用 autoLoadEntities: true, 应该使用下面一行
      // entities: [BusinessChannel], // 确保包含你的实体 
    }),
    WithdrawModule, BillModule, UploadModule],
  controllers: [AppController, DogController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor, // 将拦截器注册为全局拦截器  
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("matierals")
  }
}
