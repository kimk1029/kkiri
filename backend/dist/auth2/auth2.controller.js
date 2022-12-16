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
exports.Auth2Controller = void 0;
const common_1 = require("@nestjs/common");
const auth2_service_1 = require("./auth2.service");
const create_auth2_dto_1 = require("./dto/create-auth2.dto");
const update_auth2_dto_1 = require("./dto/update-auth2.dto");
let Auth2Controller = class Auth2Controller {
    constructor(auth2Service) {
        this.auth2Service = auth2Service;
    }
    create(createAuth2Dto) {
        return this.auth2Service.create(createAuth2Dto);
    }
    findAll() {
        return this.auth2Service.findAll();
    }
    findOne(id) {
        return this.auth2Service.findOne(+id);
    }
    update(id, updateAuth2Dto) {
        return this.auth2Service.update(+id, updateAuth2Dto);
    }
    remove(id) {
        return this.auth2Service.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth2_dto_1.CreateAuth2Dto]),
    __metadata("design:returntype", void 0)
], Auth2Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Auth2Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Auth2Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_auth2_dto_1.UpdateAuth2Dto]),
    __metadata("design:returntype", void 0)
], Auth2Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Auth2Controller.prototype, "remove", null);
Auth2Controller = __decorate([
    (0, common_1.Controller)('auth2'),
    __metadata("design:paramtypes", [auth2_service_1.Auth2Service])
], Auth2Controller);
exports.Auth2Controller = Auth2Controller;
//# sourceMappingURL=auth2.controller.js.map