import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, Like } from "typeorm"
import { ScbDiscountApply } from 'entities/ScbDiscountApply';
@Injectable()
export class PaymentService {
    constructor(@InjectRepository(ScbDiscountApply)  private scbDiscountApply:Repository<ScbDiscountApply>) {
        
    }
    async getList(body) {
        await this.scbDiscountApply.find({

        })
    }
}
