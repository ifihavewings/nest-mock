"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysModule = void 0;
const common_1 = require("@nestjs/common");
const sys_controller_1 = require("./sys.controller");
const sys_service_1 = require("./sys.service");
const interceptors_1 = require("../interceptors");
const core_1 = require("@nestjs/core");
let SysModule = class SysModule {
};
exports.SysModule = SysModule;
exports.SysModule = SysModule = __decorate([
    (0, common_1.Module)({
        controllers: [sys_controller_1.SysController],
        providers: [sys_service_1.SysService, {
                provide: core_1.APP_INTERCEPTOR,
                useClass: interceptors_1.ResponseInterceptor,
            },]
    })
], SysModule);
//# sourceMappingURL=sys.module.js.map