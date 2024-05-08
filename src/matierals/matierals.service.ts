import { Injectable, Body } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import {Repository, Like} from "typeorm"
import { Attach,  } from 'src/entities/Attach.entity';
import { FileUploadDTO } from './dto/fileUpload.dto';
import {FileListParam} from "./interface"
@Injectable()
export class MatieralsService {
    constructor(@InjectRepository(Attach) private readonly attach: Repository<Attach>){}
    upload(file: FileUploadDTO) {
        console.log('upolad', file)

        const data = new Attach()
        data.annexName = file.annexName
        data.fileType = file.fileType
        data.fileName = file.fileName
        console.log('filedto=========')
        console.log(file)
        return this.attach.save(data)
    }

    async findAll(body: FileListParam) {
        const data = await this.attach.find({
          where: {
            fileName: Like(`%${body.annexName}%`),
            fileType: body.fileType,
            annexName: Like(`%${body.annexName}%`),
            
          },
          skip: (body.page - 1) * body.size,
          take: body.size
        })
        const total = await this.attach.count({
          where: {
            fileName: Like(`%${body.annexName}%`),
            fileType: body.fileType,
            annexName: Like(`%${body.annexName}%`),
          }
        })
        return {
          data,
          total
        }
    }
    
}
