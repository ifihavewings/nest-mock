// user.controller.ts
// import { Controller, Get } from '@nestjs/common';
// import { MySQLService } from './mysql.service';

// @Controller('users')
// export class UserController {
//   constructor(private readonly mysqlService: MySQLService) {}

//   @Get()
//   async getUsers(): Promise<any[]> {
//     try {
//       const sql = 'SELECT * FROM users';
//       const users = await this.mysqlService.query(sql);
//       return users;
//     } catch (error) {
//       throw new Error('Failed to fetch users');
//     }
//   }
// }