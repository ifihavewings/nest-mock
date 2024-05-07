import { Controller, Post } from '@nestjs/common';

@Controller('sys')
export class SysController {

    @Post('dict/list')
    getDictList() {
        return {

            aaa: [
                { 0: '哈哈0' },
                { 1: '哈哈1' },
                { 2: '哈哈2' },
            ]
        }
    }
}
