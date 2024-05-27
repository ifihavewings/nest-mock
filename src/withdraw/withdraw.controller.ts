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

    @Post('del')
    del(@Body() body) {
        return this.withdrawService.del(body)
    }

    @Post('list')
    list(@Body() body) {
        return this.withdrawService.list(body)
    }
    @Post('recheck')
    recheck(@Body() body) {
        return this.withdrawService.recheck(body)
    }
    @Post('withdraw')
    withdraw(@Body() body) {
        return this.withdrawService.withdraw(body)
    }
}
