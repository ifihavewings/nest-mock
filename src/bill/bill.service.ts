import { Injectable } from '@nestjs/common';
import {Bill} from "src/entities/Bill.entity"
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BillService {

    constructor(@InjectRepository(Bill) private readonly bill: Repository<Bill>,) {

     }

    async add(body) {
        const data = await this.bill.save(body)
        return data
    }
    async list(body) {
        const data = await this.bill.find({
            skip: (body.page - 1) * body.size,
            take: body.size,
      })
        const total = await this.bill.count({

        })

        return {
            records: data, 
            total
        }
    }
}
