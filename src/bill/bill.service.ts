import { Injectable } from '@nestjs/common';
import { ScbBill } from 'entities/ScbBill';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BillService {

    constructor(@InjectRepository(ScbBill) private readonly scbBill: Repository<ScbBill>,) {

    }

    async add(body) {
        const data = await this.scbBill.save(body)
        return data
    }
    async list(body) {
        const data = await this.scbBill.find({
            skip: (body.page - 1) * body.size,
            take: body.size,
        })
        const total = await this.scbBill.count({})

        return {
            records: data,
            total
        }
    }
}
