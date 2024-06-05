import { Body, Controller, Post } from '@nestjs/common';
import { AcceptanceService } from './acceptance.service';
@Controller('acceptance')
export class AcceptanceController {
    constructor(private acceptanceService: AcceptanceService) {

    }
    @Post("add")
    add(@Body() body) {
        return this.acceptanceService.add(body)
    }
    @Post("del")
    del(@Body() body) {
        return this.acceptanceService.del(body)
    }
    @Post("list")
    getList(@Body() body) {
        return this.acceptanceService.getList(body)
    }


    @Post("sign/add")
    signAdd(@Body() body) {
        return this.acceptanceService.addSign(body)
    }
}
