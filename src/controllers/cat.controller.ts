import { Controller, Get } from '@nestjs/common';
@Controller('cats')
export class CatsController {
    @Get()
    getAll(): string {
        return 'get all cats';
    }
}
