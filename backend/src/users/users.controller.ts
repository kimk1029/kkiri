import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags, ApiQuery, ApiProperty, ApiBody } from '@nestjs/swagger';
import { IsSocial } from 'src/common/enums';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { request } from 'express';

@ApiTags('유저')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiQuery({ name: 'isSocial', enum: IsSocial })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token') 
  @ApiOperation({ summary: '유저정보API', description: '유저를 정보를 조회한다. 로그인 후 응답 받은 jwt키를 swagger 우측 상단  authorize 버튼을 클릭 해서 value에 기입해주면 로그인 상태이다.' })
  // @Get('/findOneUserInfo/:id')
  // findOneUserInfo(@Param('id') id: string, @Request() request) {
  @Get('/findOneUserInfo')
  findOneUserInfo(@Request() request) {
    return this.usersService.findOneUserInfo(+request.user.id);
  }

  @Patch('/patchUserInfo')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token') 
  update(@Request() request, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+request.user.id, updateUserDto);
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
