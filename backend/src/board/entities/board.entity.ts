import { ApiProperty } from "@nestjs/swagger";
import { Category } from "src/category/entities/category.entity";
import { EntityBase } from "src/common/entityBase";
import { IsYn } from "src/common/enums";
import { Reply } from "src/reply/entities/reply.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Board  extends EntityBase {
   
    @ApiProperty({
        required: true,
        description: '제목',
    }) 
    @Column('varchar', { length: 500 })
    title: string;

    @ApiProperty({
        required: true,
        description: '내용',
    }) 
    @Column('varchar')
    content: string;

    @ApiProperty({
        required: true,
        description: '조회수',
    }) 
    @Column({default:0})
    views: number;

    @ApiProperty({
        required: false,
        description: '노출여부'
    }) 
    @Column({ type: 'enum', name: 'isDelYn', enum: IsYn, nullable: false , default: IsYn.YES}  )
    delYn: IsYn;

    @ManyToOne(() => Category, (category) => category.board)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @ManyToOne(() => User, (user) => user.board)
    @JoinColumn({ name: 'userId' })
    user: User;

    @OneToMany(() => Reply, (reply) => reply.board)
    @JoinTable({ name: 'id' })
    reply: Reply[]

}
