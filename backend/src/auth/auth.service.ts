import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { IsSocial } from 'src/common/enums';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 회원 가입 
   * 1. 비밀번호 일치 확인  
   * 2. 기등록 회원 가입 확인 
   * 3. 동일 닉네임 확인 
   * @param registerAuthDto 
   * @returns 
   */
   async register(registerAuthDto: RegisterAuthDto){
    // 비밀번호 일치 확인 
    this.checkMatchPassword(registerAuthDto);
    // 기등록 회원 가입 확인(이메일 확인) 
    this.checkEmail(registerAuthDto.email);
    // 동일 닉네임 확인 
    this.checkNickname(registerAuthDto.nickName);
    
    const createUserDto: CreateUserDto = {
      email: registerAuthDto.email,
      password: registerAuthDto.password,
      nickName: registerAuthDto.nickName,
      isSocial: registerAuthDto.isSocial,
    };
    const user = await this.usersService.create(createUserDto);
    delete user.password;
    return { jwt: this.jwtService.sign({ role: 'user', id: user.id }), user };
  }

  /**
   * 유저 확인
   * @param email 
   * @param pass 
   * @param isSocial
   * @returns 
   */
  async validateUser(email: string, pass: string, isSocial:IsSocial): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user)
      throw new HttpException('No user matching id.', HttpStatus.BAD_REQUEST);
    // 쇼셜가입된 회원 체크 
    if(isSocial !== user.isSocial)
      throw new HttpException('일반 회원은 일반로그인으로 로그인 가능합니다.', HttpStatus.BAD_REQUEST);

    // 소셜 가입인 경우 
    if(IsSocial.NORMAL !== isSocial) {
      return user;
    }

    const isMatch = await compare(pass, user.password);
    if (isMatch) {
      delete user.password;
      return user;
    }
    throw new HttpException('Password incorrect.', HttpStatus.BAD_REQUEST);
  }

  /**
   * 로그인
   * @param loginAuthDto 
   * @returns 
   */
  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.validateUser(
      loginAuthDto.email,
      loginAuthDto.password,
      loginAuthDto.isSocial
    );
    const payload = { type: 'user', id: user.id };
    return {
      jwt: this.jwtService.sign(payload),
      user,
    };
  }

  async checkMatchPassword(registerAuthDto:RegisterAuthDto) {
    if(registerAuthDto.password !== registerAuthDto.passwordConfirm)
     throw new HttpException('비밀번호와 비밀번호확인이 일치하지 않습니다.', HttpStatus.BAD_REQUEST); 
  }

  async checkEmail(email:string) {
    const checkEmail = await this.usersService.findByEmail(email);
    if(checkEmail)
      throw new HttpException('이미 가입되어있는 이메일입니다.', HttpStatus.BAD_REQUEST);
  }
  
  async checkNickname(nickName:string) {
    const checkNickName = await this.usersService.findByNickname(nickName);
    if(checkNickName)
      throw new HttpException('이미 가입되어있는 이메일입니다.', HttpStatus.BAD_REQUEST);
  }
 
}
