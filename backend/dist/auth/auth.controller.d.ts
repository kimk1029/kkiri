import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerAuthDto: RegisterAuthDto): Promise<{
        jwt: string;
        user: import("../users/entities/user.entity").User;
    }>;
    login(loginAuthDto: LoginAuthDto): Promise<{
        jwt: string;
        user: any;
    }>;
}
