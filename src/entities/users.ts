import {Entity , BaseEntity, PrimaryGeneratedColumn, Column}  from 'typeorm'

@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    ID : number;

    @Column()
    name : string;

    @Column()
    age : string;

    @Column()
    reg : string;

    @Column({default : false})
    isinUse : boolean;

}