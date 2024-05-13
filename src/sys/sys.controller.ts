import { Body, Controller, Post } from '@nestjs/common';
import {SysService} from"./sys.service"
@Controller('sys')
export class SysController {
    constructor(private sysService: SysService) {

    }

    /**
     * 字典
     * @returns 
     */
    @Post('dict/list')
    getDictList() {
        return {

            
        }
    }
    /**
     * 参与者机构代码 - 名称
     * @param body 
     * @returns 
     */
    @Post("institutional/list")
    listInstitution(@Body() body) {
        const data = this.sysService.listInstitution(body)
        return data
    }

    /**
     * 渠道列表
     * @param body 
     * @returns 
     */
    @Post("channel/list")
    listChannel(@Body() body) {
        const data = this.sysService.listChannel(body)
        return data
    }
};
