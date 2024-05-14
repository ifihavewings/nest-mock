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
}
