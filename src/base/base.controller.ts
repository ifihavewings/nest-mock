import { Controller, Post } from '@nestjs/common';
import { BaseService } from './base.service';
@Controller('base')
export class BaseController {

    constructor (private baseService: BaseService) {

    }
    @Post('dict')
    dict() {
        return this.baseService.getDict()
    }
}
