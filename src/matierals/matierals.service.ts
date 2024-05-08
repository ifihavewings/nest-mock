import { Injectable } from '@nestjs/common';

@Injectable()
export class MatieralsService {

    upload() {
        console.log('upolad')
        return "upload"
    }
}
