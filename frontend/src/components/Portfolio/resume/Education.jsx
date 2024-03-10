import React from 'react';
import TittleSecion from "@/components/Portfolio/resume/ContentResume/TittleSecion";
import Tittle from "@/components/Portfolio/resume/ContentResume/Tittle";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";
import TextDescriptive from "@/components/Portfolio/resume/ContentResume/TextDescriptive";
import ListInfo from "@/components/Portfolio/resume/ContentResume/ListInfo";

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
            <TittleSecion name={'Education'}/>
            <div className={'resume-item'}>
                <Tittle name={'UCI'} subinfo={'Universidad de las Ciencias Informáticas'} linkPlace={'dd'}/>
                <DatesAndPlace info={'2021 - Present | La Habana Cuba'}/>
                <TextDescriptive text={'Informatic Science Engineer'}/>
                <ListInfo info={educationInfo}/>
                <Tittle name={'Awards'} />
                <ListInfo info={awards}/>
            </div>

        </div>
    );
};

export default Education;