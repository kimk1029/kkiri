import { ApiProperty } from "@nestjs/swagger";
import { Board } from "src/board/entities/board.entity";
import { EntityBase } from "src/common/entityBase";
import { IsYn } from "src/common/enums";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Category extends EntityBase {

    @ApiProperty({
        required: false,
        description: '상위카테고리id'
    })
    @Column()
    upperLevCatId: number;

    @ApiProperty({
        required: true,
        description: '카테고리명',
    }) 
    @Column('varchar', { length: 255 })
    name: string;

    @ApiProperty({
        required: false,
        description: '노출여부'
    }) 
    @Column({ type: 'enum', name: 'isShowYn', enum: IsYn, nullable: false }  )
    showYn: IsYn;

    @OneToMany(() => Board, (board) => board.category)
    @JoinTable({ name: 'id' })
    board: Board[]

}
