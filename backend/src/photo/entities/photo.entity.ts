import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    section:string;
    @Column({ type: 'bytea', nullable: true })
    imgs: Buffer;
    


}
