import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Resume {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    title:string;
    @Column({nullable:false, type:"timestamp without time zone"})
    date_init:string;
    @Column({nullable:false, type:"timestamp without time zone"})
    date_end:string;
    @Column({nullable:false,type:'varchar'})
    description:string;
    @Column({nullable:false})
    company:string;
    @Column({nullable:false,unique:true})
    link:string;
    @Column({nullable:false})
    employer:string;
    @Column({nullable:false,type:'varchar'})
    city:string;
    @Column({nullable:false,type:'varchar'})
    name_section:string;


}
