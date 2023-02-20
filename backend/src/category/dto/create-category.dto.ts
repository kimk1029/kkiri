import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsYn } from "src/common/enums";
import { Column } from "typeorm";

export class CreateCategoryDto {

    @ApiProperty({
        required: false,
        description: '상위카테고리id',
        example: '',
    })
    upperLevCatId: number;

    @ApiProperty({
        required: true,
        description: '카테고리명',
        example: '공지사항',
    }) 
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        required: false,
        description: '노출여부',
        example: 'Y',
    }) 
    showYn: IsYn;
}
