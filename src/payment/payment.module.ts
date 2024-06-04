import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScbDiscountApply } from 'entities/ScbDiscountApply';
@Module({
  imports: [TypeOrmModule.forFeature([ScbDiscountApply])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}