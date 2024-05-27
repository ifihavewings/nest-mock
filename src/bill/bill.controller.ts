import { Body, Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service';
import {v4} from "uuid"
@Controller('bill')
export class BillController {
    constructor(private billService: BillService) {

    }
    
    @Post('test')
    test(@Body() body) {
        console.log(body)
        return 'ok'
    }

    @Post('add')
    add(@Body() body) {
        console.log(v4())
        return this.billService.add(body)
    }
    @Post('list')
    list(@Body() body) {
        return this.billService.list(body)
    }
    @Post('detail')
    detail(@Body() body) {
        return this.billService.getDetail(body)
    }


    /**
     * 冻结解冻
     **/

    @Post('freeze/add')
    freeze(@Body() body) {
        return this.billService.freeze(body)
    }
}
