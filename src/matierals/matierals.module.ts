import { Module } from '@nestjs/common';
import { MatieralsController } from './matierals.controller';
import { MatieralsService } from './matierals.service';

@Module({
  controllers: [MatieralsController],
  providers: [MatieralsService]
})
export class MatieralsModule {}
