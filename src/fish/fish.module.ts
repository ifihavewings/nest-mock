import { Module } from '@nestjs/common';
import { FishController } from './fish.controller';
import { FishService } from './fish.service';
import { CatsModule } from "../cat/cat.module"

@Module({

    imports: [CatsModule],
    controllers: [FishController],

    providers: [FishService]
})
export class FishModule { }
