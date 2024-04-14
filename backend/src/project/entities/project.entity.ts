import { ProjectIMG } from '../../project-img/entities/project-img.entity';
import { Skill } from '../../skill/entities/skill.entity';
import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    name:string;
    @Column({nullable:false})
    category:string;
    @Column({nullable:false})
    client:string;
    @Column({nullable:false, type:"timestamp without time zone"})
    Date:string;
    @Column({nullable:false, type:'varchar'})
    description:string;
    @Column({nullable:false,unique:true})
    url:string;

    @ManyToOne(() => Skill, (skill_id) => skill_id.pros, {eager: true,onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'skill_id'})
    skill_id:Skill;


    @OneToMany(() => ProjectIMG, (prosImg) => prosImg.project_id)
    prosImgs: Project[];

}
