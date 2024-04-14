
import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Section {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    title:string;

    @Column({nullable:false,type:'varchar'})
    description:string;


    


}

