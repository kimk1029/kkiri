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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    register(registerAuthDto) {
        this.checkMatchPassword(registerAuthDto);
        this.checkEmail(registerAuthDto);
        this.checkNickname(registerAuthDto);
        return this.usersService.create(registerAuthDto);
    }
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
    async checkMatchPassword(registerAuthDto) {
        if (registerAuthDto.password !== registerAuthDto.passwordConfirm)
            throw new common_1.HttpException('비밀번호와 비밀번호확인이 일치하지 않습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
    async checkEmail(registerAuthDto) {
        const email = await this.usersService.findByEmail(registerAuthDto.email);
        if (email)
            throw new common_1.HttpException('동일한 이메일 있습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
    async checkNickname(registerAuthDto) {
        const nickName = await this.usersService.findByNickname(registerAuthDto.nickName);
        if (nickName)
            throw new common_1.HttpException('동일한 닉네임이 있습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map