import { Injectable } from '@nestjs/common';
import { ScbWithdrawBill } from 'entities/ScbWithdrawBill';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

@Injectable()
export class WithdrawService {
    constructor( @InjectRepository(ScbWithdrawBill) private readonly scbWithdrawBill: Repository<ScbWithdrawBill>,) {

    }
    async add(body) {
        const res = await this.scbWithdrawBill.save(body.scbWithdrawBillDTOList)
        return res
    }

    async list(body) {
        const res = await this.scbWithdrawBill.find({
              skip: (body.page - 1) * body.size,
              take: body.size,
              where: {
                deleteFlag: '0'
              }
        })
        const total = await this.scbWithdrawBill.count({
            where: {
              deleteFlag: '0'
            }
          })
        return {
            records: res,
            total
        };

    }
}
