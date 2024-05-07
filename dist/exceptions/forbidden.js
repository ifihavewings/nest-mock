"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAA = void 0;
const common_1 = require("@nestjs/common");
class AAA extends common_1.HttpException {
    constructor() {
        super('Forbiden', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.AAA = AAA;
//# sourceMappingURL=forbidden.js.map