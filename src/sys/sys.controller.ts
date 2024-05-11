import { Controller, Post } from '@nestjs/common';

@Controller('sys')
export class SysController {

    @Post('dict/list')
    getDictList() {
        return {

            
        }
    }
};
