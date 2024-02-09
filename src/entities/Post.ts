import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    title: string;
}