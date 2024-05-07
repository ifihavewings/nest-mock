import { Injectable } from '@nestjs/common';
import { Fish } from './interface/fish.interface';
@Injectable()
export class FishService {
    private readonly fish: Fish[] = []

    create(fish: Fish) {
        this.fish.push(fish)
    }
    list() {
        return this.fish
    }
}
