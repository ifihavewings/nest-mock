import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { CatsModule } from './cat/cat.module';
import { FishModule } from './fish/fish.module';
import { SysModule } from './sys/sys.module';
import { MatieralsModule } from './matierals/matierals.module';
// import {MySQLModule} from "./mysql/mysql.module"

// MySQLModule.forRoot({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydatabase',
// }),
@Module({
  imports: [CatsModule, FishModule, SysModule, MatieralsModule,],
  controllers: [AppController, DogController],
  providers: [AppService],
})
export class AppModule {}
