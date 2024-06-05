import { Module } from '@nestjs/common';
import { ScbHintAcceptApply } from 'entities/ScbHintAcceptApply';
import { ScbHintCollectApply } from 'entities/ScbHintCollectApply';
import { AcceptanceController } from './acceptance.controller';
import { AcceptanceService } from './acceptance.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ScbHintAcceptApply]), TypeOrmModule.forFeature([ScbHintCollectApply]), ],
    controllers: [AcceptanceController],
    providers: [AcceptanceService]
})
export class AcceptanceModule { }




