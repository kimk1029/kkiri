import { EntityBase } from 'src/common/entityBase'
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';
@Entity()
export class User extends EntityBase {
    
    // 이메일
    // MBTI
    // 성별
    // 나이
    @ApiProperty({
        required: true,
        example: 'kkiri@gmail.com',
        description: '이메일',
    })
    @Column('varchar', { length: 256, unique: true })
    email: string;

    @ApiProperty({
        required: false,
        example: '@@@q123',
        description: '비밀번호',
    }) 
    @Column('varchar', { length: 255 })
    @Exclude()
    password: string;

}
