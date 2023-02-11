import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IsSocial } from 'src/common/enums';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';

@ApiTags('인증')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
  @Post('/register')
  register(@Body() registerAuthDto:RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @Post('/login')
  @ApiOperation({ summary: '로그인 API', description: '로그인을 한다.' })
  @ApiCreatedResponse({ description: '로그인을 한다.', type: Auth })
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

}
