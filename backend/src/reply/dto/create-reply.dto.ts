import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateReplyDto {
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
    boardId: number;

    @ApiProperty({
        required: true,
        description: '내용',
        example: '내용입니다.',
    }) 
    @IsNotEmpty()
    content: string;
}
