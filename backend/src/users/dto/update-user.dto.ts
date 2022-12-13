import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsBloodTypes,IsMbti,IsColorTypes } from 'src/common/enums';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        required: false,
        description: '혈액형',
        example: IsBloodTypes,
    }) 
    isBloodTypes: IsBloodTypes;

    @ApiProperty({
        required: false,
        description: 'MBTI',
    }) 
    isMbti: IsMbti;

    @ApiProperty({
        required: false,
        description: '컬러Type',
    }) 
    isColorTypes: IsColorTypes;
    
}
