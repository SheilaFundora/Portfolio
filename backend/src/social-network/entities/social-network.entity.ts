import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class SocialNetwork {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    name:string;

    @Column({nullable:false,unique:true})
    link:string;


    


}

