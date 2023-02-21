import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@ApiTags('게시판')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
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
    name: 'filter.category.id',
    required: false,
    example: 1,
    description: '카테고리아이디 - null 값 시 전체 불러옴 ',
  })
  @ApiQuery({
    name: 'searchBy',
    required: false,
    example: 'content',
    description: 'search 검색 제목+내용 - title:제목, content:내용, null:제목+내용',
  })
  @ApiQuery({
    name: 'search',
    required: true,
    example: '8',
    description: '검색 제목 내요을 검색한다. null 값인 경우 적용 안됨 ',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    example: 'views:DESC',
    description: 'search 검색 시 sort  - views:조회수, id:생성순',
  })
  @Get('/findBoardList')
  findBoardList(@Paginate() query: PaginateQuery): Promise<Paginated<Board>> {
    return this.boardService.findBoardList(query)
  }
 
  @Get('/findContentOne:id')
  findContentOne(@Param('id') id: string) {
    return this.boardService.findContentOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
