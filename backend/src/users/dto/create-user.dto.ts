import { ApiProperty,ApiQuery } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { IsSocial } from 'src/common/enums';

export class CreateUserDto {
      
    @ApiProperty({
        required: true,
        example: 'kkiri@gmail.com',
        description: '이메일',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        required: false,
        example: '@@@q123',
        description: '비밀번호',
    }) 
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        required: true,
        example: '끼리끼리',
        description: '닉네임',
    }) 
    @IsNotEmpty()
    nickName: string;

    @ApiProperty({
        required: true,
        description: '소셜TYPE',
        // example: [IsSocial.NORMAL,IsSocial.KAKAO,IsSocial.NAVER],
        // enum: ['일반', '카카오', '네이버']
        name:'isSocial', 
        enum: IsSocial
        
    }) 
    @IsEnum(IsSocial)
    isSocial: IsSocial;


}
