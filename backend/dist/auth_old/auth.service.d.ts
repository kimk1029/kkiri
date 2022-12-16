import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerAuthDto: RegisterAuthDto): Promise<import("../users/entities/user.entity").User>;
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
    checkMatchPassword(registerAuthDto: RegisterAuthDto): Promise<any>;
    checkEmail(registerAuthDto: RegisterAuthDto): Promise<any>;
    checkNickname(registerAuthDto: RegisterAuthDto): Promise<any>;
}
