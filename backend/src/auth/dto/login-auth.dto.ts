import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { IsSocial } from 'src/common/enums';

export class LoginAuthDto {
  @ApiProperty({
    required: true,
    example: 'kkiri2@gmail.com',
    description: '이메일', 
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
    example: '@@@q123',
    description: '비밀번호', 
  })
  @IsString()
  password: string;

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
