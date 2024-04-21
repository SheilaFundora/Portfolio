import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Lenguaje {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:true})
    name:string;
    @Column({nullable:true})
    level:string;
}
