import React from 'react';
import TitleSection from "@/components/Portfolio/resume/ContentResume/TitleSection";
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import Subtitle from "@/components/Portfolio/resume/ContentResume/Subtitle";
import ListDescription from "@/components/Portfolio/resume/ContentResume/ListDescription";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";

const text = 'Project dedicated to offering employment services to software developers, helping them\n' +
    '                achieve their employment goals by hiring their services online.'

const technologiesUsed = ["The technologies used were HTML, CSS, JavaScript, Bootstrap, Git, PHP, MariaDB, Docker"];

const Project = () => {
    return (
        <div>
            <TitleSection name={'Project'}/>
            <div className={'resume-item'}>
                <Title name={'Full Stack Developer on the Cuban Dev Jobs website'}/>

                <DatesAndPlace info={'7/2022 - 11/2022 | La Habana, Cuba'}/>
                <Subtitle text={text}/>
                <ListDescription info={technologiesUsed}/>
            </div>

            <p></p>
        </div>
    );
};

export default Project;
