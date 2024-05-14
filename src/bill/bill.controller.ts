import { Body, Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service';
@Controller('bill')
export class BillController {
    constructor(private billService: BillService) {

    }
    @Post('add')
    add(@Body() body) {
        return this.billService.add(body)
    }
    @Post('list')
    list(@Body() body) {
        return this.billService.list(body)
    }
}
