// mysql.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()
export class MySQLService {
  constructor(@Inject('MYSQL_CONNECTION') private readonly connection: Connection) {}

  async query(sql: string, values?: any[]) {
    const [rows] = await this.connection.execute(sql, values);
    return rows;
  }
}
