import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async checkMatchPassword(createUserDto: CreateUserDto): Promise<any> {
    // this.usersService.findOne(1);
    if(createUserDto.password !== createUserDto.passwordConfirm)
      throw new HttpException('비밀번호와 비밀번호확인이 일치하지 않습니다.', HttpStatus.BAD_REQUEST);
  }

  // 회원가입 정합성 확인 
  // async validateRegister(registerAuthDto: RegisterAuthDto): Promise<any> {
  //   // 닉네임 확인 (중복검사)
  //   const profile  = await this.profileService.findByNicname(registerAuthDto.nickname);
  //   if (profile) 
  //     throw new HttpException('동일한 닉네임이 있습니다.', HttpStatus.BAD_REQUEST);
  //   // 이메일 중복확인
  //   const user = await this.usersService.findByEmail(registerAuthDto.email);
  //   if(user)
  //     throw new HttpException('이미 가입되어 있습니다.', HttpStatus.BAD_REQUEST);
  //   // 비밀번호 확인
  //   if(registerAuthDto.password !== registerAuthDto.passwordConfirm)
  //     throw new HttpException('비밀번호와 비밀번호확인이 일치하지 않습니다.', HttpStatus.BAD_REQUEST);
  // }
}
