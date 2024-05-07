import { Controller, Get, Post, Redirect, Query, Param, Body } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-dog.dto';
@Controller('dog')
export class DogController {
    @Get()
    findAll(): string {
        return 'a dog wangwangwang'
    }
    @Post()
    create(@Body() body: CreateCatDto): string {
        const {name, age, gender} = body
        return `create a dog named ${name}, age ${age}, gender ${gender}`
    }

    // 重定向
    @Get("redirect")
    @Redirect('https://nest.nodejs.cn', 301)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://nest.nodejs.cn/v5/' };
        }
    }

    // 动态路由参数
    @Get("one/:id")
    findOne(@Param() params: any) {
        console.log(params)
        return `this is dog ${params.id}`
    }

}
