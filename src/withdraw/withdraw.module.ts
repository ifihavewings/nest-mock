import { Module } from '@nestjs/common';
import { WithdrawController } from './withdraw.controller';
import { WithdrawService } from './withdraw.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScbWithdrawBill } from 'entities/ScbWithdrawBill';


@Module({
  imports: [TypeOrmModule.forFeature([ScbWithdrawBill])],
  controllers: [WithdrawController],
  providers: [WithdrawService]
})
export class WithdrawModule {}