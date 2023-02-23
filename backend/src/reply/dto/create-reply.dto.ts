import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateReplyDto {

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
