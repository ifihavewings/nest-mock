import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { CatsModule } from './cat/cat.module';
import { FishModule } from './fish/fish.module';
import { SysModule } from './sys/sys.module';
import { MatieralsModule } from './matierals/matierals.module';
import {MySQLModule} from "./mysql/mysql.module"
import {MYSQL} from "../confs"


@Module({
  imports: [CatsModule, FishModule, SysModule, MatieralsModule,MySQLModule.forRoot(MYSQL),],
  controllers: [AppController, DogController],
  providers: [AppService],
})
export class AppModule {}
