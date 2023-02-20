import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { Paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

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
    name: 'category.id',
    required: true,
    example: 1,
    description: '카테고리아이디',
  })
  @Get()
  findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Board>> {
    return this.boardService.findAll(query)
  }
 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
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
