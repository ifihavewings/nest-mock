// mysql.module.ts
import { Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'mysql2/promise';
import { MySQLService } from './mysql.service';

@Module({
  providers: [MySQLService],
  exports: [MySQLService],
})
export class MySQLModule {
  static async forRoot(options: ConnectionOptions) {
    const connection = await createConnection(options);
    return {
      module: MySQLModule,
      providers: [
        {
          provide: 'MYSQL_CONNECTION',
          useValue: connection,
        },
      ],
    };
  }
}
