import { Body, Controller, Post } from '@nestjs/common';
import {SysService} from"./sys.service"
@Controller('sys')
export class SysController {
    constructor(private sysService: SysService) {

    }
    @Post('dict/list')
    getDictList() {
        return {

            
        }
    }

    @Post("institutional/list")
    listInstitution(@Body() body) {
        const data = this.sysService.listInstitution(body)
        return data
    }
};
