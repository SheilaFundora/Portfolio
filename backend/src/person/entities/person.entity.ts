import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    name:string;
    @Column({nullable:false})
    lastname:string;
    @Column({nullable:false})
    phone:string;
    @Column({nullable:false, type:"timestamp without time zone"})
    birthday:string;
    @Column({nullable:false})
    address:string;
    @Column({nullable:false,unique:true})
    email:string;
    @Column({nullable:false})
    degree:string;
    @Column({nullable:false})
    freelancer:boolean;
    @Column({nullable:false})
    remote:boolean;
    @Column({nullable:false})
    profession:string;
    @Column({ type: 'bytea', nullable: true })
    logo: Buffer;
    


}
