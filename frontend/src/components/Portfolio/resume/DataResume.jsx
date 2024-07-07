import React from 'react';
import TitleSection from "@/components/Portfolio/resume/ContentResume/TitleSection";
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import Subtitle from "@/components/Portfolio/resume/ContentResume/Subtitle";
import ListDescription from "@/components/Portfolio/resume/ContentResume/ListDescription";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";

const text = 'Innovative full stack developer, 5th year student of the "Information\n' +
    '                Science Engineering"\n' +
    '                career, eager to learn new technologies, teamwork and above all continue polishing my\n' +
    '                skills.'
const DataResume = (props) => {
    const contactInfo = ["Estados Unidos, Florida", "+1 754 610 0521", "sheilafundora04@gmail.com"];
    const { id, titleImpt, description, titleSecondary, link, city, country, date_init, date_end , category_id, subtitle} = props;
    const dataDescription = description.split('\n');

    return (
        <div>
            <TitleSection name={category_id.name} />

            <div className={'resume-item'}>
              <Title name={titleImpt} subinfo={titleSecondary} linkPlace={link}/>
              <DatesAndPlace dateInit={date_init} city={city} country={country} date_end={date_end}/>
              <Subtitle text={subtitle} />
              <ListDescription info={contactInfo} dataDescription={dataDescription}/>
            </div>


        </div>
    );
};

export default DataResume;
