import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';
import {IsBloodTypes,IsMbti,IsSocial} from './../common/enums';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
  ) {}

  /**
   * 회원등록
  */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = createUserDto.email;
    user.password = await hash(createUserDto.password, 10);
    user.nickName = createUserDto.nickName;
    user.isSocial = createUserDto.isSocial;
    await user.save();
    return user;
  }

  /**
   * 이메일 찾기
   */
  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  /**
   * 닉네임 찾기
   */
   async findByNickname(nickName: string) {
    return await User.findOne({ where: { nickName } });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOneUserInfo(id: number) {
    const queryBuilder = User.createQueryBuilder('user')
    .select(['user.id','user.email', 'user.nickName','user.isBloodTypes','user.isMbti','user.isSocial','user.isColorTypes'])
    .where({id})
    .getOne();
    return queryBuilder;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await User.findOne({ where: { id } });
    user.isMbti = updateUserDto.isMbti;
    user.isBloodTypes = updateUserDto.isBloodTypes;
    user.isColorTypes = updateUserDto.isColorTypes;
    await user.save();
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } 


}
