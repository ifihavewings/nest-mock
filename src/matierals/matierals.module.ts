import { Module } from '@nestjs/common';
import { MatieralsController } from './matierals.controller';
import { MatieralsService } from './matierals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attach } from 'src/entities/Attach.entity';
import { TradePartner } from 'src/entities/TradePartner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attach]), TypeOrmModule.forFeature([TradePartner])],
  controllers: [MatieralsController,],
  providers: [MatieralsService]
})
export class MatieralsModule {}
