import { ArgumentMetadata, HttpException, PipeTransform } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common"
export class ValidationAldut implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value.age)
        if (value.age >= 18) {
            return value
        }
        throw new HttpException('age check failed', HttpStatus.BAD_REQUEST, {
            cause: new Error('Cause Error'),
        });
    }
}