import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { ScbBill } from 'entities/ScbBill';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScbBill])],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}

