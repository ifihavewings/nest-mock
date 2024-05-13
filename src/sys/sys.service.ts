import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionEntity } from 'src/entities/InstitutionEntity';
import { Like } from 'typeorm';
import { BusinessChannel } from './../entities/BusinessChannel';
@Injectable()
export class SysService {
    constructor(@InjectRepository(InstitutionEntity) private readonly institutionEntity: Repository<InstitutionEntity>,@InjectRepository(BusinessChannel) private readonly businessChannel: Repository<BusinessChannel>,) {

    }
    async listInstitution(body) {
        const data = await this.institutionEntity.find({
            where: {
                agencyName: Like(`%${body.agencyName}%`),
            },
            skip: (body.page - 1) * body.size,
            take: body.size
        })
        return data
    }
    //  
    async listChannel(body) {
        const data = await this.businessChannel.find({
            where: [
                {
                    channelName: Like(`%${body.channelName}%`),
                },
                {
                    channelSortCode: Like(`%${body.channelName}%`),
                },
        ],
            skip: (body.page - 1) * body.size,
            take: body.size
        })
        return data
    }
}
