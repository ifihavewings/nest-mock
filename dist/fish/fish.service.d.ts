import { Fish } from './interface/fish.interface';
export declare class FishService {
    private readonly fish;
    create(fish: Fish): void;
    list(): Fish[];
}
