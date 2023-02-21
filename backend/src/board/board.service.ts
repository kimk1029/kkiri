import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterOperator, paginate, PaginateConfig, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  
  async create(createBoardDto: CreateBoardDto) {
    const category = await Category.findOneBy({ id : createBoardDto.categoryId });
    const user = await User.findOneBy({id : createBoardDto.userId});
    if (!category)
      throw new HttpException('No category matching id.', HttpStatus.BAD_REQUEST);
    if (!user)
      throw new HttpException('No user matching id.', HttpStatus.BAD_REQUEST);
    const board = new Board();
    board.title = createBoardDto.title;
    board.content = createBoardDto.content;
    board.category = category;
    board.user = user;
    await board.save();
    return board;
  }

  async findBoardList(query: PaginateQuery): Promise<Paginated<Board>> {
    const boardRepository = Board.getRepository();
    console.log(query);
    return await paginate(query, boardRepository, {
      relations: ['category','user'],
      select: ['id','title', 'content', 'category.name','views','user.nickName','updatedAt'],
      sortableColumns: ['id','views'], 
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['title','content'],
      filterableColumns: {
        'category.id': [FilterOperator.EQ],
        'user.nickName':[FilterOperator.EQ]
      },
    });
  }
  
  async findContentOne(id: number) {
    
    await Board.update(id, { views:(await Board.findOneBy({id})).views + 1 });
    const queryBuilder = Board.createQueryBuilder('board')
    .leftJoinAndSelect('board.category', 'category', 'board.categoryId = category.id')
    .leftJoinAndSelect('board.user', 'user', 'board.userId = user.id')
    .select(['board.id','board.title', 'board.content','board.views','category.name','user.nickName','board.updatedAt'])
    .where({id})
    .getOne()

    return queryBuilder;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const category = await Category.findOneBy({ id : updateBoardDto.categoryId });
    const user = await User.findOneBy({id : updateBoardDto.userId});
    const board = await Board.findOneBy({ id });

    if (!category)
      throw new HttpException('No category matching id.', HttpStatus.BAD_REQUEST);
    if (!user && !(user == board.user))
      throw new HttpException('No user matching id.', HttpStatus.BAD_REQUEST);
   
    board.title = updateBoardDto.title;
    board.content = updateBoardDto.content;
    board.category = category;
    board.user = user;
    await board.save();
    return board;
  }

  remove(id: number) {
    return `This action removes a #${id} borad`;
  }
}
