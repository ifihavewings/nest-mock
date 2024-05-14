import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { Bill } from 'src/entities/Bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}

