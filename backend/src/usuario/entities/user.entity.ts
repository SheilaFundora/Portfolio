import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { ValidationPipe } from '@nestjs/common';
import { ROLES } from '../../constants/roles';


@Entity()
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column({nullable:true})
    firstName:string;
    @Column({nullable:true})
    lastName:string;
    @Column({nullable:true})
    age:string;
    @Column({nullable:true})
    lastname:string;
    @Column({nullable:true})
    phone:string;
    @Column({nullable:true, type:"timestamp without time zone"})
    birthday:string;
    @Column({nullable:true})
    address:string;
    @Column({nullable:true})
    degree:string;
    @Column({nullable:true})
    freelancer:boolean;
    @Column({nullable:true})
    remote:boolean;
    @Column({nullable:true})
    profession:string;
    @Column({ type: 'bytea', nullable: true })
    logo: Buffer;
    @Column({unique:true})
    email:string;
    @Column({unique:true})
    username:string;
    @Column({unique:false})
    password:string;
    @Column({type:'boolean', default:false})
    active:boolean
    @Column({type:'uuid', unique:true})
    activationToken:string;
    @Column({type:'uuid', unique:true, nullable:true})
    resetPass: string
    @Column({nullable:true})
    experienceYears:number;
    @Column({nullable:true})
    startsGitHub:number;
    @Column({nullable:true})
    cvPath: string; // Ruta del archivo CV
    @Column({nullable:true})
    experience:string
    @Column({nullable:true})
    level:string;
}
