import { Usuario } from 'src/usuario/entities/user.entity';
import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    section:string;
    @Column({  nullable: true })
    imgs: string;
    
    @ManyToOne(() => Usuario, (user_id) => user_id.photos, {eager: true,onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user_id:Usuario;

}
