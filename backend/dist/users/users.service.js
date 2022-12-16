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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor() { }
    async create(createUserDto) {
        const user = new user_entity_1.User();
        user.email = createUserDto.email;
        user.password = await (0, bcrypt_1.hash)(createUserDto.password, 10);
        user.nickName = createUserDto.nickName;
        user.isSocial = createUserDto.isSocial;
        await user.save();
        return user;
    }
    async findByEmail(email) {
        return await user_entity_1.User.findOne({ where: { email } });
    }
    async findByNickname(nickName) {
        return await user_entity_1.User.findOne({ where: { nickName } });
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map