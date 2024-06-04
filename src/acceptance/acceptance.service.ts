import { Injectable } from '@nestjs/common';
import { ScbHintAcceptApply } from 'entities/ScbHintAcceptApply';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
@Injectable()
export class AcceptanceService {
    constructor(
        @InjectRepository(ScbHintAcceptApply) private readonly scbHintAcceptApply: Repository<ScbHintAcceptApply>) {

    }

    async add(body) {
        const res = await this.scbHintAcceptApply.save(body)
        return res;
    }

    async getList(body) {
        const data = await this.scbHintAcceptApply.find({
            where: {
                deleteFlag : '0',
            },
            order: {
                createTime: 'DESC',
              },
              skip: (body.current - 1) * body.size,
              take: body.size
        })

        const total = await this.scbHintAcceptApply.count({
          })

          return {
            records: data,
            total
        }
    }
}
