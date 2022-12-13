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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const entityBase_1 = require("../../common/entityBase");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../common/enums");
let User = class User extends entityBase_1.EntityBase {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: 'kkiri@gmail.com',
        description: '이메일',
    }),
    (0, typeorm_1.Column)('varchar', { length: 256, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: '@@@q123',
        description: '비밀번호',
    }),
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: '끼리끼리',
        description: '닉네임',
    }),
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "nickName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: '혈액형',
    }),
    (0, typeorm_1.Column)({ type: 'enum', name: 'isBloodTypes', enum: enums_1.IsBloodTypes, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "isBloodTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'MBTI',
    }),
    (0, typeorm_1.Column)({ type: 'enum', name: 'isMbti', enum: enums_1.IsMbti, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "isMbti", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        examples: enums_1.IsSocial,
        description: '소셜TYPE',
    }),
    (0, typeorm_1.Column)({ type: 'enum', name: 'isSocial', enum: enums_1.IsSocial, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "isSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: '컬러TYPE',
    }),
    (0, typeorm_1.Column)({ type: 'enum', name: 'isColorTypes', enum: enums_1.IsColorTypes, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "isColorTypes", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map