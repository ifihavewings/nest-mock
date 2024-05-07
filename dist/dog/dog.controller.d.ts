import { CreateCatDto } from 'src/dto/create-dog.dto';
export declare class DogController {
    findAll(): string;
    create(body: CreateCatDto): string;
    getDocs(version: any): {
        url: string;
    };
    findOne(params: any): string;
}
