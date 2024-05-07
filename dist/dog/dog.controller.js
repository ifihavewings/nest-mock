"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const create_dog_dto_1 = require("../dto/create-dog.dto");
let DogController = class DogController {
    findAll() {
        return 'a dog wangwangwang';
    }
    create(body) {
        const { name, age, gender } = body;
        return `create a dog named ${name}, age ${age}, gender ${gender}`;
    }
    getDocs(version) {
        if (version && version === '5') {
            return { url: 'https://nest.nodejs.cn/v5/' };
        }
    }
    findOne(params) {
        console.log(params);
        return `this is dog ${params.id}`;
    }
};
exports.DogController = DogController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dog_dto_1.CreateCatDto]),
    __metadata("design:returntype", String)
], DogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("redirect"),
    (0, common_1.Redirect)('https://nest.nodejs.cn', 301),
    __param(0, (0, common_1.Query)('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getDocs", null);
__decorate([
    (0, common_1.Get)("one/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "findOne", null);
exports.DogController = DogController = __decorate([
    (0, common_1.Controller)('dog')
], DogController);
//# sourceMappingURL=dog.controller.js.map