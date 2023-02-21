import { ApiProperty } from "@nestjs/swagger";
import { Board } from "src/board/entities/board.entity";
import { EntityBase } from "src/common/entityBase";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Reply extends EntityBase {

    @ApiProperty({
        required: true,
        description: '내용',
    }) 
    @Column('varchar')
    content: string;
    
    @ManyToOne(() => Board, (board) => board.reply)
    @JoinColumn({ name: 'boardId' })
    board: Board;
    
    @ManyToOne(() => User, (user) => user.reply)
    @JoinColumn({ name: 'userId' })
    user: User;
}
