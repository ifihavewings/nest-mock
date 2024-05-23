import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { ScbBill } from 'entities/ScbBill';
import { ScbFreezeBill } from 'entities/ScbFreezeBill';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScbBill]),TypeOrmModule.forFeature([ScbFreezeBill])],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}

