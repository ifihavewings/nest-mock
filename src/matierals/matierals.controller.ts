import { Controller, Param, Post, Body, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { MatieralsService } from "./matierals.service"
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { FileUploadDTO } from "./dto/fileUpload.dto"
import { FileListParam } from "./interface"

import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from "@nestjs/platform-express"
import { join } from "path"
import { writeFile } from 'fs/promises';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

let fname = ''
let fpath = ''
@Controller('matierals')
export class MatieralsController {

  constructor(private matieralsService: MatieralsService) {

  }

  @Post('list')
  async getList(@Body() body: FileListParam) {
    const res = await this.matieralsService.findAll(body)
    console.log(res)
    const { data: records, total } = res
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
        destination: join(__dirname, '../../../', 'static', 'files'),
        filename: (req, file, callback) => {
          const filename = fname = Buffer.from(file.originalname, 'latin1').toString('utf8')
          callback(null, filename);
        },
      }),
    }),
  )
  async upload(@Body() fileUploadDTO: FileUploadDTO, @UploadedFile() file: Array<Express.Multer.File>) {
    console.log("filse===")
    console.log(file)
    fileUploadDTO.fileName = fname
    fileUploadDTO.filePath = `/pmobile/ss/static/files/${fname}`

    const res = await this.matieralsService.upload(fileUploadDTO)
    fname = ''
    fpath = ''
    console.log("upload", res)
    return res
  }

  // 上传单个文件正确的示例
  /**
   * 
   * 1. FileInterceptor('file') 
   *  - 设置单个文件的字段名， 前端要通过这个字段名传递文件参数
   *  - 下边的处理方法通过这个字段拿到文件 async uploadTest(@UploadedFile() file: Express.Multer.File, @Body() body) 
   * @returns 
   */
  @Post('uploadTest')  
  @UseInterceptors(  
    FileInterceptor('file', {  
      storage: diskStorage({  

        // destination: join(__dirname, '../../../', 'static', 'files'),
        // filename: (req, file, callback) => {
        //   const filename = fname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        //   callback(null, filename);
        // },
        // 常用处理处理
        destination: join(__dirname, '../../../', 'static', 'files'),  
        filename: (req, file, callback) => {  
          const randomName = Array(32)  
            .fill(null)  
            .map(() => (Math.round(Math.random() * 16)).toString(16))  
            .join('');  
          return callback(null, `${randomName}${file.originalname}`);  
        },  
      }),  
    }),  
  )  
  async uploadTest(@UploadedFile() file: Express.Multer.File, @Body() body) {  
    console.log(file, body);  
    // 处理上传文件的逻辑 
    const res = this.matieralsService.uploadTest({
      body,
      file
      
    }) 
    return { message: 'Upload successful!', filename: file.filename };  
  }  

/**
 * 前端用 files 字段进行传递
 * @param files 
 * @returns 
 */
  @Post('uploadTestMulti')  
  @UseInterceptors(  
    FileFieldsInterceptor([  
      { name: 'files', maxCount: 10 }, // 假设你允许最多上传10个文件  
    ], {  
      storage: diskStorage({  
        // destination: join(__dirname, '../../../', 'static', 'files'),
        // filename: (req, file, callback) => {
        //   const filename = fname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        //   console.log("filename==================")
        //   console.log(filename)
        //   callback(null, filename);
        // },
        // 常用处理
        destination: join(__dirname, '../../../', 'static', 'files'),  
        filename: (req, file, callback) => {  
          const randomName = Array(32)  
            .fill(null)  
            .map(() => (Math.round(Math.random() * 16)).toString(16))  
            .join('');  
          const fileName = `${randomName}${extname(file.originalname)}`;  
          return callback(null, fileName);  
        },  
      }),  
    }),  
  )  
  async uploadTestMulti(@UploadedFiles() files: Array<Express.Multer.File>) {  
    console.log(files); // 打印上传的文件数组  
    console.log(Array.isArray(files) )
    // 处理上传文件的逻辑  
    return { message: 'Upload successful!', filenames: Array.from(files).map(file => file.filename) };  
  }    

  @Post('detail')
  async detail(@Body() body) {

    const data = await this.matieralsService.findOneById(body)

    return data[0]
  }



  @Post("trader/add")
  async addTrader(@Body() body) {

    const data = await this.matieralsService.addTrader(body)
    return data
  }
  @Post("trader/delete")
  async delTrader(@Body() body) {

    const data = await this.matieralsService.delTrader(body)
    return data
  }
  @Post("trader/update")
  async updateTrader(@Body() body) {

    const data = await this.matieralsService.updateTrader(body)
    return data
  }

  @Post("trader/list")
  async getTradeList(@Body() body) {
    const data = await this.matieralsService.getTradeList(body)
    return data;
  }

}
