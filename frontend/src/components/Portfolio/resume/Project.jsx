import React from 'react';
import TittleSecion from "@/components/Portfolio/resume/ContentResume/TittleSecion";
import Tittle from "@/components/Portfolio/resume/ContentResume/Tittle";
import TextDescriptive from "@/components/Portfolio/resume/ContentResume/TextDescriptive";
import ListInfo from "@/components/Portfolio/resume/ContentResume/ListInfo";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";

const text = 'Project dedicated to offering employment services to software developers, helping them\n' +
    '                achieve their employment goals by hiring their services online.'

const technologiesUsed = ["The technologies used were HTML, CSS, JavaScript, Bootstrap, Git, PHP, MariaDB, Docker"];

const Project = () => {
    return (
        <div>
            <TittleSecion name={'Project'}/>
            <div className={'resume-item'}>
                <Tittle name={'Full Stack Developer on the Cuban Dev Jobs website'}/>

                <DatesAndPlace info={'7/2022 - 11/2022 | La Habana, Cuba'}/>
                <TextDescriptive text={text}/>
                <ListInfo info={technologiesUsed}/>
            </div>

            <p></p>
        </div>
    );
};

export default Project;