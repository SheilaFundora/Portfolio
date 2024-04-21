import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Resume {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:true})
    titleImpt:string;
    @Column({nullable:true})
    titleSecondary:string;
    @Column({nullable:true, type:"timestamp without time zone"})
    date_init:string;
    @Column({nullable:true, type:"timestamp without time zone"})
    date_end:string;
    @Column({nullable:true,type:'varchar'})
    description:string;
    @Column({nullable:true})
    country:string;
    @Column({nullable:true,unique:true})
    link:string;
    @Column({nullable:true,type:'varchar'})
    city:string;
    @Column({nullable:true,type:'varchar'})
    name_section:string;
    @Column({nullable:true})
    subtitle:string;


}
