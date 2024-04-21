import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Services {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    name:string;
    @Column({nullable:false,type:'varchar'})
    description:string;
    @Column({ type: 'bytea', nullable: true })
    icon: Buffer;


    


}
