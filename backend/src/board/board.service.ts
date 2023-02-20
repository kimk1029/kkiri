import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterOperator, paginate, PaginateConfig, Paginated, PaginateQuery } from 'nestjs-paginate';
import { NEVER } from 'rxjs';
import { Category } from 'src/category/entities/category.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  
  async create(createBoardDto: CreateBoardDto) {
    console.log('1');
    const category = await Category.findOneBy({ id : 1 });
    console.log('2');
    if (!category)
      throw new HttpException('No category matching id.', HttpStatus.BAD_REQUEST);
    const board = new Board();
    board.title = createBoardDto.title;
    board.content = createBoardDto.content;

    console.log(category);
    board.category = category[0];
    await board.save();
    return board;
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Board>> {
    const boardRepository = Board.getRepository();

    // const config: PaginateConfig<Board> = {
      
     
      
      
    // }

    // 작업중 

    const board = await boardRepository.createQueryBuilder("board");
    
    console.log(board);

    const  queryBuilder  =  boardRepository 
  . createQueryBuilder ( 'board' ) 
  .leftJoin ( 'board.category' ,  'category' ).where({id:1}) 
 // . where ( 'cats.owner = :ownerId' ,  { ownerId } )
    const config: PaginateConfig<Board> = {
      sortableColumns: ['title','category.name'],
    }

const  result  =  await  paginate < Board > ( query ,  queryBuilder ,  config )
return result;

    return await paginate(query, boardRepository, {
      relations: ['category'],
      sortableColumns: ['title','category.name'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        'category.id': [FilterOperator.EQ],
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} borad`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} borad`;
  }

  remove(id: number) {
    return `This action removes a #${id} borad`;
  }
}
