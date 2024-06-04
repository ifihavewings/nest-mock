import { Body, Controller, Post } from '@nestjs/common';
import { AcceptanceService } from './acceptance.service';
@Controller('acceptance')
export class AcceptanceController {
    constructor(private acceptanceService: AcceptanceService) {

    }

    @Post("list")
    getList(@Body() body) {
        return this.acceptanceService.getList(body)
    }
}
