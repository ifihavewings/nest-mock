import { Module } from '@nestjs/common';
import { SysController } from './sys.controller';
import { SysService } from './sys.service';
import {ResponseInterceptor} from '../interceptors'
import { APP_INTERCEPTOR } from '@nestjs/core';
@Module({
  controllers: [SysController],
  providers: [SysService, {
    provide: APP_INTERCEPTOR,
    useClass: ResponseInterceptor,
  },]
})
export class SysModule {}
