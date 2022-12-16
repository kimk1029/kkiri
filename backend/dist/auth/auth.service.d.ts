import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { IsSocial } from 'src/common/enums';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerAuthDto: RegisterAuthDto): Promise<{
        jwt: string;
        user: import("../users/entities/user.entity").User;
    }>;
    validateUser(email: string, pass: string, isSocial: IsSocial): Promise<any>;
    login(loginAuthDto: LoginAuthDto): Promise<{
        jwt: string;
        user: any;
    }>;
    checkMatchPassword(registerAuthDto: RegisterAuthDto): Promise<void>;
    checkEmail(email: string): Promise<void>;
    checkNickname(nickName: string): Promise<void>;
}
