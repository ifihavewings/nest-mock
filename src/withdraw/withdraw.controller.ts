import { Body, Controller, Post } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';
@Controller('withdraw')
export class WithdrawController {
    constructor(private withdrawService: WithdrawService) {

    }

    @Post('add')
    add(@Body() body) {
        return this.withdrawService.add(body)
    }
}
