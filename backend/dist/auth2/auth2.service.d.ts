import { CreateAuth2Dto } from './dto/create-auth2.dto';
import { UpdateAuth2Dto } from './dto/update-auth2.dto';
export declare class Auth2Service {
    create(createAuth2Dto: CreateAuth2Dto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuth2Dto: UpdateAuth2Dto): string;
    remove(id: number): string;
}
