import { HttpException, HttpStatus } from "@nestjs/common";

export class AAA extends HttpException {
    constructor() {
        super('Forbiden', HttpStatus.FORBIDDEN)
    }
}