import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ValidationAldut implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
