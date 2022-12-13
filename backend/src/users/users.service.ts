import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';
import {IsBloodTypes,IsMbti,IsSocial} from './../common/enums';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    //@Inject(forwardRef( () => AuthService)) // 순환참조 해결 
    // private authService: AuthService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // 정합성 확인
    // this.authService.checkMatchPassword(createUserDto);
    const user = new User();
    user.email = createUserDto.email;
    user.password = await hash(createUserDto.password, 10);
    user.nickName = createUserDto.nickName;
    user.isSocial = createUserDto.isSocial;
    user.save();
    // return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } 

}
