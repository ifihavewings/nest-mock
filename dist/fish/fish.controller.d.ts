import { FishService } from './fish.service';
import { CreateFishDTO } from './dto/fish.dto';
export declare class FishController {
    private fishServie;
    constructor(fishServie: FishService);
    list(): import("./interface/fish.interface").Fish[];
    create(createFishDTO: CreateFishDTO): Promise<string>;
    getOneById(id: number): string;
    testCustomPipe(body: any): any;
    getException1(): void;
    getException2(): void;
    getException3(): void;
}
