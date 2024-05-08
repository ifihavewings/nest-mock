import { Module } from '@nestjs/common';
import { MatieralsController } from './matierals.controller';
import { MatieralsService } from './matierals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attach } from 'src/entities/Attach.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attach])],
  controllers: [MatieralsController,],
  providers: [MatieralsService]
})
export class MatieralsModule {}
