import { Project } from '../../project/entities/project.entity';
import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Skill {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false,type:'float'})
    porcent:string;
    @Column({ type: 'bytea', nullable: true })
    icon: Buffer;
    
    @OneToMany(() => Project, (pro) => pro.skill_id)
    pros: Project[];

}
