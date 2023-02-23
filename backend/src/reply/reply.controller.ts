import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('댓글')
@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token') 
  @ApiOperation({ summary: '유저정보API', description: '댓글을 작성한다.. 로그인 후 응답 받은 jwt키를 swagger 우측 상단  authorize 버튼을 클릭 해서 value에 기입해주면 로그인 상태이다.' })
  @Post()
  create(@Body() createReplyDto: CreateReplyDto, @Request() request) {
    createReplyDto.userId = request.user.id;
    return this.replyService.create(createReplyDto);
  }

  @ApiQuery({
    name: 'page',
    required: true,
    example: 1,
    description: '불러올 페이지',
  })
  @ApiQuery({
    name: 'limit',
    required: true,
    example: 2,
    description: '한번에 가져올 개수',
  })
  @ApiQuery({
    name: 'filter.board.id',
    required: true,
    example: 1,
    description: '게시판ID 필수',
  })
  @Get('/replyList')
  replyList(@Paginate() query: PaginateQuery) {
    return this.replyService.replyList(query);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token') 
  @ApiOperation({ summary: '유저정보API', description: '댓글을 수정한다.. 로그인 후 응답 받은 jwt키를 swagger 우측 상단  authorize 버튼을 클릭 해서 value에 기입해주면 로그인 상태이다.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReplyDto: UpdateReplyDto, @Request() request) {
    updateReplyDto.userId = request.user.id;
    return this.replyService.update(+id, updateReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.replyService.remove(+id);
  }
}
