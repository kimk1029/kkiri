import { EntityBase } from 'src/common/entityBase'
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, IsNull } from 'typeorm';
import {IsBloodTypes, IsMbti, IsSocial, IsColorTypes} from '../../common/enums';
@Entity()
export class User extends EntityBase {
    
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
    @Column('varchar', { length: 255 , nullable: true})
    @Exclude()
    password: string;

    @ApiProperty({
        required: false,
        example: '끼리끼리',
        description: '닉네임',
    }) 
    @Column('varchar', { length: 255 })
    @Exclude()
    nickName: string;

    @ApiProperty({
        required: false,
        description: '혈액형',
    }) 
    @Column({ type: 'enum', name: 'isBloodTypes', enum: IsBloodTypes, nullable: true }  )
    isBloodTypes: IsBloodTypes;

    @ApiProperty({
        required: false,
        description: 'MBTI',
    }) 
    @Column({ type: 'enum', name: 'isMbti', enum: IsMbti, nullable: true }  )
    isMbti: IsMbti;

    @ApiProperty({
        required: false,
        examples: IsSocial,
        description: '소셜TYPE',
    }) 
    @Column({ type: 'enum', name: 'isSocial', enum: IsSocial, nullable: false }  )
    isSocial: IsSocial;

    @ApiProperty({
        required: false,
        description: '컬러TYPE',
    }) 
    @Column({ type: 'enum', name: 'isColorTypes', enum: IsColorTypes, nullable: true }  )
    isColorTypes: IsColorTypes;

}
