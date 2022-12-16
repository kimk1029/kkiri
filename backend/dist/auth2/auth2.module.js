"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth2Module = void 0;
const common_1 = require("@nestjs/common");
const auth2_service_1 = require("./auth2.service");
const auth2_controller_1 = require("./auth2.controller");
let Auth2Module = class Auth2Module {
};
Auth2Module = __decorate([
    (0, common_1.Module)({
        controllers: [auth2_controller_1.Auth2Controller],
        providers: [auth2_service_1.Auth2Service]
    })
], Auth2Module);
exports.Auth2Module = Auth2Module;
//# sourceMappingURL=auth2.module.js.map