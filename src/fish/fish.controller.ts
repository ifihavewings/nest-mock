import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FishService } from './fish.service';
import { CreateFishDTO } from './dto/fish.dto';
import { ValidationAldut } from 'src/pipes/index.pipe';
import {AAA} from "../exceptions/forbidden"
@Controller('fish')
export class FishController {
    constructor(private fishServie: FishService) {

    }

    @Get()
    list() {
        return this.fishServie.list()
    }
    @Post()
    async create(@Body() createFishDTO: CreateFishDTO) {
        this.fishServie.create(createFishDTO)
        return "ok"
    }

    @Get(":id")
    getOneById(@Param('id', ParseIntPipe) id: number) {
        return `one fish id: ${id}`
    }
    @Post('testPostBodyPipe')
    // 校验单个属性 testCustomPipe(@Body('age',ValidationAldut) body)
    // 校验整个body testCustomPipe(@Body(ValidationAldut) body)
    testCustomPipe(@Body(ValidationAldut) body) {
        console.log(body);
        
        console.log("testPostBodyPipe")
        return body
    }
    // 异常
    @Post("exp1")
    getException1() {
        throw new HttpException("exception1 ", HttpStatus.FORBIDDEN)
    }
    // 抛出异常
    // {
    //     "statusCode": 403,
    //     "message": "exception1 "
    // }
    @Post("exp2")
    getException2() {
        throw new HttpException({
            code: HttpStatus.BAD_REQUEST,
            msg: 'bad',
            sever: 'nest'
        }, HttpStatus.BAD_REQUEST)
    }
    // 抛出异常
    // {
    //     "code": 400,
    //     "msg": "bad",
    //     "sever": "nest"
    // }

    @Post("exp3")
    getException3() {
        throw new AAA()
    }
}
