import { EntityBase } from 'src/common/entityBase';
import { IsBloodTypes, IsMbti, IsSocial, IsColorTypes } from '../../common/enums';
export declare class User extends EntityBase {
    email: string;
    password: string;
    nickName: string;
    isBloodTypes: IsBloodTypes;
    isMbti: IsMbti;
    isSocial: IsSocial;
    isColorTypes: IsColorTypes;
}
