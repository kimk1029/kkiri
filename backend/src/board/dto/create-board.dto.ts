import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsYn } from "src/common/enums";

export class CreateBoardDto {

    @ApiProperty({
        required: true,
        description: 'user아이디 - 추후 변경 로그인한 아이디로 filter 적용',
        example: 1,
    }) 
    @IsNotEmpty()
    userId: number;

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