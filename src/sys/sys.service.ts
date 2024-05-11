import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionEntity } from 'src/entities/InstitutionEntity';
import { Like } from 'typeorm';
@Injectable()
export class SysService {
    constructor(@InjectRepository(InstitutionEntity) private readonly institutionEntity: Repository<InstitutionEntity>) {

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
}
