import { Injectable } from '@nestjs/common';
import { ScbHintAcceptApply } from 'entities/ScbHintAcceptApply';
import { ScbHintCollectApply } from 'entities/ScbHintCollectApply';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
@Injectable()
export class AcceptanceService {
    constructor(
        @InjectRepository(ScbHintAcceptApply) private readonly scbHintAcceptApply: Repository<ScbHintAcceptApply>,
        @InjectRepository(ScbHintCollectApply) private readonly scbHintCollectApply: Repository<ScbHintCollectApply>) {

    }

    async add(body) {
        const res = await this.scbHintAcceptApply.save(body)
        return res;
    }

    async del(body) {
        const res = await this.scbHintAcceptApply.update(body.id, {deleteFlag: '1'})
        return res
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

    async addSign(body) {
        const data = await this.scbHintCollectApply.save(body)
        return {
            data
        }
    }
}
