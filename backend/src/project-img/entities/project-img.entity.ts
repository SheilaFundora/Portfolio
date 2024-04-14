import { Project } from '../../project/entities/project.entity';
import {Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class ProjectIMG {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({ type: 'bytea', nullable: true })
    imgs: Buffer;
    @ManyToOne(() => Project, (project_id) => project_id.prosImgs, {eager: true,onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'project_id'})
    project_id:Project;

}
