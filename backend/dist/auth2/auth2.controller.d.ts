import { Auth2Service } from './auth2.service';
import { CreateAuth2Dto } from './dto/create-auth2.dto';
import { UpdateAuth2Dto } from './dto/update-auth2.dto';
export declare class Auth2Controller {
    private readonly auth2Service;
    constructor(auth2Service: Auth2Service);
    create(createAuth2Dto: CreateAuth2Dto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuth2Dto: UpdateAuth2Dto): string;
    remove(id: string): string;
}
