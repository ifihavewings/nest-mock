import { Module } from '@nestjs/common';
import { WithdrawController } from './withdraw.controller';
import { WithdrawService } from './withdraw.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Withdraw } from 'src/entities/Withdraw.entiry';


@Module({
  imports: [TypeOrmModule.forFeature([Withdraw])],
  controllers: [WithdrawController],
  providers: [WithdrawService]
})
export class WithdrawModule {}