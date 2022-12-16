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
exports.RegisterAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../common/enums");
class RegisterAuthDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: 'kkiri@gmail.com',
        description: '이메일',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: '@@@q123',
        description: '비밀번호',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: '@@@q123',
        description: '비밀번호확인',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "passwordConfirm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: '끼리끼리',
        description: '닉네임',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "nickName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: '소셜TYPE',
        name: 'isSocial',
        enum: enums_1.IsSocial
    }),
    (0, class_validator_1.IsEnum)(enums_1.IsSocial),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "isSocial", void 0);
exports.RegisterAuthDto = RegisterAuthDto;
//# sourceMappingURL=register-auth.dto.js.map