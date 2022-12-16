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
const bcrypt_1 = require("bcrypt");
const enums_1 = require("../common/enums");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(registerAuthDto) {
        this.checkMatchPassword(registerAuthDto);
        this.checkEmail(registerAuthDto.email);
        this.checkNickname(registerAuthDto.nickName);
        const createUserDto = {
            email: registerAuthDto.email,
            password: registerAuthDto.password,
            nickName: registerAuthDto.nickName,
            isSocial: registerAuthDto.isSocial,
        };
        const user = await this.usersService.create(createUserDto);
        delete user.password;
        return { jwt: this.jwtService.sign({ role: 'user', id: user.id }), user };
    }
    async validateUser(email, pass, isSocial) {
        const user = await this.usersService.findByEmail(email);
        if (!user)
            throw new common_1.HttpException('No user matching id.', common_1.HttpStatus.BAD_REQUEST);
        if (isSocial !== user.isSocial)
            throw new common_1.HttpException('일반 회원은 일반로그인으로 로그인 가능합니다.', common_1.HttpStatus.BAD_REQUEST);
        if (enums_1.IsSocial.NORMAL !== isSocial) {
            return user;
        }
        const isMatch = await (0, bcrypt_1.compare)(pass, user.password);
        if (isMatch) {
            delete user.password;
            return user;
        }
        throw new common_1.HttpException('Password incorrect.', common_1.HttpStatus.BAD_REQUEST);
    }
    async login(loginAuthDto) {
        const user = await this.validateUser(loginAuthDto.email, loginAuthDto.password, loginAuthDto.isSocial);
        const payload = { type: 'user', id: user.id };
        return {
            jwt: this.jwtService.sign(payload),
            user,
        };
    }
    async checkMatchPassword(registerAuthDto) {
        if (registerAuthDto.password !== registerAuthDto.passwordConfirm)
            throw new common_1.HttpException('비밀번호와 비밀번호확인이 일치하지 않습니다.', common_1.HttpStatus.BAD_REQUEST);
    }
    async checkEmail(email) {
        const checkEmail = await this.usersService.findByEmail(email);
        if (checkEmail)
            throw new common_1.HttpException('이미 가입되어있는 이메일입니다.', common_1.HttpStatus.BAD_REQUEST);
    }
    async checkNickname(nickName) {
        const checkNickName = await this.usersService.findByNickname(nickName);
        if (checkNickName)
            throw new common_1.HttpException('이미 가입되어있는 이메일입니다.', common_1.HttpStatus.BAD_REQUEST);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map