import { Usuario } from 'src/usuario/entities/user.entity';
import { Project } from '../../project/entities/project.entity';
import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Skill {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:true,type:'float'})
    porcent:string;
    @Column({ type: 'bytea', nullable: true })
    icon: Buffer;
    @Column({nullable:true})
    name:string;
    @OneToMany(() => Project, (pro) => pro.skill_id)
    pros: Project[];
    @Column({nullable:true})
    group:string;

    @ManyToOne(() => Usuario, (user_id) => user_id.skills, {eager: true,onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user_id:Usuario;
}
