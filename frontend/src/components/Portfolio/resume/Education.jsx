import React from 'react';
import TitleSection from "@/components/Portfolio/resume/ContentResume/TitleSection";
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";
import Subtitle from "@/components/Portfolio/resume/ContentResume/Subtitle";
import ListDescription from "@/components/Portfolio/resume/ContentResume/ListDescription";

const educationInfo = [
    "Informatic Science Engineer",
    "Member of the ICPC Caribbean Training Camp (Analysis and Design of algorithms)",
    "Participation in competitive programming competitions, Pascal Cup competitions at the faculty level, university level, national and regional level",
    "Participation in computer forums, student scientific conferences, computer history forums",
    "Participation in scientific congresses",
    "Member of the jury for the exhibition of works in the scientific conference and history forum"
];
const awards = [
    "Member of the ICPC Caribbean Training Camp",
    "ICPC Caribbean Finals( Qualifier ) - 16to Lugar en el Caribe (06/2021)",
    "ICPC Caribbean Finals - 13ro Lugar (07/2021)",
    "ICPC Caribbean Finals( Qualifier ) (03/2022)",
    "ICPC Caribbean Finals( Qualifier ) - 16to Lugar en el Caribe (03/2022)",
    "Classification for the 2022 regional",
    "3rd place cup at the faculty level (2022)",
    "Numerous awards in the scientific conferences at the faculty level, passing several works at the university level with excellent results (higher level)",
    "Awards in history forums, including the work 'History of the ACM-ICPC in CUBA', obtaining relevance at the faculty and university level"
];

const Education = () => {
    return (
        <div>
            <TitleSection name={'Education'}/>
            <div className={'resume-item'}>
                <Title name={'UCI'} subinfo={'Universidad de las Ciencias Informáticas'} linkPlace={'dd'}/>
                <DatesAndPlace info={'2021 - Present | La Habana Cuba'}/>
                <Subtitle text={'Informatic Science Engineer'}/>
                <ListDescription info={educationInfo}/>
                <Title name={'Awards'} />
                <ListDescription info={awards}/>
            </div>

        </div>
    );
};

export default Education;
