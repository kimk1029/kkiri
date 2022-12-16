import { IsSocial } from 'src/common/enums';
export declare class CreateUserDto {
    email: string;
    password: string;
    nickName: string;
    isSocial: IsSocial;
}
