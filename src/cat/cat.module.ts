import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}