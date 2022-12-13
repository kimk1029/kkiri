import { CreateUserDto } from './create-user.dto';
import { IsBloodTypes, IsMbti, IsColorTypes } from 'src/common/enums';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    isBloodTypes: IsBloodTypes;
    isMbti: IsMbti;
    isColorTypes: IsColorTypes;
}
export {};
