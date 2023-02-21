import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';

@ApiTags('댓글')
@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Post()
  create(@Body() createReplyDto: CreateReplyDto) {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReplyDto: UpdateReplyDto) {
    return this.replyService.update(+id, updateReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.replyService.remove(+id);
  }
}
