import { Controller, Param, Post, Body, UseInterceptors, UploadedFiles,  UploadedFile} from '@nestjs/common';
import {MatieralsService} from "./matierals.service"
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import {FileUploadDTO} from "./dto/fileUpload.dto"
import {FileListParam} from "./interface"

import { diskStorage } from 'multer';
import { extname } from 'path';
import {FileInterceptor} from "@nestjs/platform-express"
import {join} from "path"
import { writeFile } from 'fs/promises';  

let fname = ''
@Controller('matierals')
export class MatieralsController {

    constructor(private matieralsService: MatieralsService) {

    }

    @Post('list')
    async getList(@Body() body:FileListParam ) {
        const res = await this.matieralsService.findAll(body)
        console.log(res)
        const {data: records, total} = res
        return {
            current: records.length,
            hitCount: false,
            optimizeCountSql: true,
            orders: [],
            pages: body.page,
            records,
            searchCount: true,
            size: body.size,
            total,
        }
    }
    @Post('upload')
    // @UseInterceptors(AnyFilesInterceptor())
    @UseInterceptors(
        FileInterceptor('file', {
          storage: diskStorage({
            destination: join(__dirname,'../../../','static','files'),
            filename: (req, file, callback) => {
              const filename =fname= Buffer.from(file.originalname,'latin1').toString('utf8')
              callback(null, filename);
            },
          }),
        }),
      )    
      async upload(@Body() fileUploadDTO: FileUploadDTO, @UploadedFile() file: Array<Express.Multer.File>) {
        console.log("filse===")
        console.log(file)
        fileUploadDTO.fileName = fname

  
        



        const res = await this.matieralsService.upload(fileUploadDTO)
        fname = ''
        console.log("upload", res)
        return res
    }

}
