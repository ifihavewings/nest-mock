import { Injectable } from '@nestjs/common';
import { ScbBill } from 'entities/ScbBill';
import { ScbFreezeBill } from 'entities/ScbFreezeBill';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BillService {

    constructor(@InjectRepository(ScbBill) private readonly scbBill: Repository<ScbBill>,
        @InjectRepository(ScbFreezeBill) private readonly scbFreezeBill: Repository<ScbFreezeBill>,) {

    }

    async add(body) {
        const data = await this.scbBill.save(body)
        return data
    }
    async list(body) {
        if(body.current) {
            body.page = body.current
        }
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
    async getDetail(body) {
        const data = await this.scbBill.findOne({
            where: {
                id: body.id
            }
        })
        return data;
    }


    /**
     * 冻结看解冻
     */

    async freeze(body) {
        const data = await this.scbFreezeBill.save(body)
        return data
    }
}
