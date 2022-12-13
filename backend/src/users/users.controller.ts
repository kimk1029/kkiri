import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags, ApiQuery, ApiProperty, ApiBody } from '@nestjs/swagger';
import { IsSocial } from 'src/common/enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiQuery({ name: 'isSocial', enum: IsSocial })
  @Post()
  create(@Query()@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // 회원가입 
  // @ApiOperation({ summary: '혈액형 목록 API', description: '혈액형 목록을 가져온다.' })
  // @ApiCreatedResponse({ description: '혈액형 목록을 가져온다.' })
  // @Get('bloodList')
  // bloodTypeList() {
  //   console.log(this.usersService.bloodTypeList());
  //   return this.usersService.bloodTypeList();
  //   // return 'dkdkdkdk';
  // }
  // MBTI목록
  
}
