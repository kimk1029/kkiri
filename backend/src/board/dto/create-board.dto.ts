import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsYn } from "src/common/enums";

export class CreateBoardDto {

    @ApiProperty({
        required: true,
        description: '카테고리아이디',
        example: 1,
    }) 
    @IsNotEmpty()
    categoryId: number;

    @ApiProperty({
        required: true,
        description: '제목',
        example: '제목입니다.',
    }) 
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        required: true,
        description: '내용',
        example: '내용입니다.',
    }) 
    @IsNotEmpty()
    content: string;
}
