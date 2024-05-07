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
exports.FishController = void 0;
const common_1 = require("@nestjs/common");
const fish_service_1 = require("./fish.service");
const fish_dto_1 = require("./dto/fish.dto");
const index_pipe_1 = require("../pipes/index.pipe");
const forbidden_1 = require("../exceptions/forbidden");
let FishController = class FishController {
    constructor(fishServie) {
        this.fishServie = fishServie;
    }
    list() {
        return this.fishServie.list();
    }
    async create(createFishDTO) {
        this.fishServie.create(createFishDTO);
        return "ok";
    }
    getOneById(id) {
        return `one fish id: ${id}`;
    }
    testCustomPipe(body) {
        console.log(body);
        console.log("testPostBodyPipe");
        return body;
    }
    getException1() {
        throw new common_1.HttpException("exception1 ", common_1.HttpStatus.FORBIDDEN);
    }
    getException2() {
        throw new common_1.HttpException({
            code: common_1.HttpStatus.BAD_REQUEST,
            msg: 'bad',
            sever: 'nest'
        }, common_1.HttpStatus.BAD_REQUEST);
    }
    getException3() {
        throw new forbidden_1.AAA();
    }
};
exports.FishController = FishController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FishController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fish_dto_1.CreateFishDTO]),
    __metadata("design:returntype", Promise)
], FishController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FishController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Post)('testPostBodyPipe'),
    __param(0, (0, common_1.Body)(index_pipe_1.ValidationAldut)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FishController.prototype, "testCustomPipe", null);
__decorate([
    (0, common_1.Post)("exp1"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FishController.prototype, "getException1", null);
__decorate([
    (0, common_1.Post)("exp2"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FishController.prototype, "getException2", null);
__decorate([
    (0, common_1.Post)("exp3"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FishController.prototype, "getException3", null);
exports.FishController = FishController = __decorate([
    (0, common_1.Controller)('fish'),
    __metadata("design:paramtypes", [fish_service_1.FishService])
], FishController);
//# sourceMappingURL=fish.controller.js.map