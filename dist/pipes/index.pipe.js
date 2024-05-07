"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationAldut = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
class ValidationAldut {
    transform(value, metadata) {
        console.log(value.age);
        if (value.age >= 18) {
            return value;
        }
        throw new common_1.HttpException('age check failed', common_2.HttpStatus.BAD_REQUEST, {
            cause: new Error('Cause Error'),
        });
    }
}
exports.ValidationAldut = ValidationAldut;
//# sourceMappingURL=index.pipe.js.map