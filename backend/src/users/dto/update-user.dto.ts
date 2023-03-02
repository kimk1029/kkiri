import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsBloodTypes,IsMbti,IsColorTypes } from 'src/common/enums';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        required: false,
        description: '혈액형',
        example: 'A형',
    }) 
    isBloodTypes: IsBloodTypes;

    @ApiProperty({
        required: false,
        description: 'MBTI',
        example: 'ENFJ',
    }) 
    isMbti: IsMbti;

    @ApiProperty({
        required: false,
        description: '컬러Type',
        example: '빨강',
    }) 
    isColorTypes: IsColorTypes;
    
}
