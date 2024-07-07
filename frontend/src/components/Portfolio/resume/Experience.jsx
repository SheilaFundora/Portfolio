import React from 'react';
import TitleSection from "@/components/Portfolio/resume/ContentResume/TitleSection";
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import Subtitle from "@/components/Portfolio/resume/ContentResume/Subtitle";
import ListDescription from "@/components/Portfolio/resume/ContentResume/ListDescription";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";

const professionalExperience = [
    "Doing professional practices",
    "Study of Python, Django, React technologies",
    "I was part of a development team that participated in the realization of a web application where we implemented a CRUD that had a login; notes could be stored, programming algorithms; managing MySQL database and PHP language for backend.",
    "Teamwork in certain tasks of the center, using GitHub."
];
const professionalExperience2 = [
    "Professor of the course 'Introduction to Computer Science'",
    "Teacher on this subject",
    "Part of the exhibition of all the projects during the course",
    "Certificate of recognition for good work"
];


const text = 'Doing professional practices how yunior developer'
const Experience = () => {
    return (
        <div>
            <TitleSection name={'Professional Experience'}/>
            <div className={'resume-item'}>
                <Title name={'FORTESS CENTER'} subinfo={'Technology Center for Training (Cuba)'} linkPlace={'dd'}/>
                <DatesAndPlace info={'2021 - Present | La Habana Cuba'}/>
                <Subtitle text={text}/>
                <ListDescription info={professionalExperience}/>
                <Title name={'UCI'} subinfo={'Universidad de las Ciencias Informáticas'} linkPlace={'dd'}/>
                <DatesAndPlace info={'2021 - Present | La Habana Cuba'}/>
                <Subtitle text={'Tasks performed\n'}/>
                <ListDescription info={professionalExperience2}/>
            </div>


        </div>
    );
};

export default Experience;
