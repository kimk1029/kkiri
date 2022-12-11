import { BaseEntity } from 'typeorm';
export declare abstract class EntityBase extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
