import { Module } from '@nestjs/common';
import { SysController } from './sys.controller';
import { SysService } from './sys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionEntity } from 'src/entities/InstitutionEntity';
@Module({
  imports: [TypeOrmModule.forFeature([InstitutionEntity])],
  controllers: [SysController],
  providers: [SysService]
})
export class SysModule {}
