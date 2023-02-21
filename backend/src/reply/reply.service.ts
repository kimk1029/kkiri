import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Board } from 'src/board/entities/board.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Reply } from './entities/reply.entity';

@Injectable()
export class ReplyService {

  async create(createReplyDto: CreateReplyDto) {
    const board = await Board.findOneBy({ id : createReplyDto.boardId });
    const user = await User.findOneBy({id : createReplyDto.userId});
    if (!board)
      throw new HttpException('No board matching id.', HttpStatus.BAD_REQUEST);
    if (!user)
      throw new HttpException('No user matching id.', HttpStatus.BAD_REQUEST);
    
    const reply = new Reply();
    reply.content = createReplyDto.content;
    reply.user = user;
    reply.board = board;

    reply.save();
    return reply;
  }

  async replyList(query: PaginateQuery): Promise<Paginated<Reply>>{
    const replyRepository = Reply.getRepository();
    console.log(query);
    return await paginate(query, replyRepository, {
      relations: ['board','user'],
      select: ['id', 'content','user.nickName','updatedAt'],
      sortableColumns: ['id'], 
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        'board.id': [FilterOperator.EQ]
      },
    });
  }

  async update(id: number, updateReplyDto: UpdateReplyDto) {
    const board = await Board.findOneBy({ id : updateReplyDto.boardId });
    const user = await User.findOneBy({id : updateReplyDto.userId});
    const reply = await Reply.findOneBy({id});
    if (!board)
      throw new HttpException('No board matching id.', HttpStatus.BAD_REQUEST);
    if (!user && !(user == reply.user))
      throw new HttpException('No user matching id.', HttpStatus.BAD_REQUEST);
    
    reply.content = updateReplyDto.content;
    board.user = user;
    await reply.save();
    return reply;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}
