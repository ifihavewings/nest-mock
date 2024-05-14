import { Injectable } from '@nestjs/common';
import {Withdraw} from "src/entities/Withdraw.entiry"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, Like } from "typeorm"

@Injectable()
export class WithdrawService {
    constructor( @InjectRepository(Withdraw) private readonly withdraw: Repository<Withdraw>,) {

    }
    async add(body) {
        const res = await this.withdraw.save(body)
        return res
    }

    async list(body) {
        const res = await this.withdraw.find({
              skip: (body.page - 1) * body.size,
              take: body.size,
        })
        const total = await this.withdraw.count({
            // where: {
            //   deleteFlag: '0'
            // }
          })
        return {
            records: res,
            total
        };

    }
}
