import "reflect-metadata"
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { CatsModule } from './cat/cat.module';
import { FishModule } from './fish/fish.module';
import { SysModule } from './sys/sys.module';
import { MatieralsModule } from './matierals/matierals.module';
import {MySQLModule} from "./mysql/mysql.module"
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from "./middlewares/LoggerMiddleware";
import { APP_INTERCEPTOR } from '@nestjs/core'; 
import { ResponseInterceptor } from "./interceptors";
import {MYSQL} from "../confs"
// MySQLModule.forRoot(MYSQL),
@Module({
  imports: [CatsModule, FishModule, SysModule, MatieralsModule,TypeOrmModule.forRoot({
    type: "mysql", //数据库类型
    username: "root", //账号
    password: "Welcome1*", //密码
    host: "10.1.128.114", //host
    port: 3307, //
    database: "scb_bill", //库名
    // (1)和(2)任选一个配置
    // (1)
    // entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
    // synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
    retryDelay: 500, //重试连接数据库间隔
    retryAttempts: 10,//重试连接数据库的次数
    // (2)
    autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
})],
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
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("matierals")
  }
}
