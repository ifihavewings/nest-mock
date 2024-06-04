import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {

    }

    @Post('list')
    getList(@Body() body) {
        return this.paymentService.getList(body);
    }
}
