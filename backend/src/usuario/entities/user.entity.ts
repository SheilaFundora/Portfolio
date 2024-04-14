import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { ValidationPipe } from '@nestjs/common';
import { ROLES } from '../../constants/roles';


@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    firstName:string;
    @Column()
    lastName:string;
    @Column()
    age:string;
    @Column({unique:true})
    email:string;
    @Column({unique:true})
    username:string;
    @Column()
    password:string;
    @Column({type:'enum',enum:ROLES})
    role:ROLES;
    


}
