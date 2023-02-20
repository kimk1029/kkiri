import { ApiProperty } from "@nestjs/swagger";
import { Category } from "src/category/entities/category.entity";
import { EntityBase } from "src/common/entityBase";
import { IsYn } from "src/common/enums";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

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
        required: false,
        description: '노출여부'
    }) 
    @Column({ type: 'enum', name: 'isDelYn', enum: IsYn, nullable: false , default: IsYn.YES}  )
    delYn: IsYn;

    
    @OneToMany(() => Category, (category) => category.board)
    @JoinColumn()
    category: Category
}
