import React from 'react';
import TitleSection from "@/components/Portfolio/resume/ContentResume/TitleSection";
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import Subtitle from "@/components/Portfolio/resume/ContentResume/Subtitle";
import ListDescription from "@/components/Portfolio/resume/ContentResume/ListDescription";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";

const DataResume = (props) => {
    const {name, resumes} = props;

    return (
        <div>
          {
            resumes.length > 0 ?
              <TitleSection name={name} />
              :
              ''
          }

          {resumes.map((item) => (
            <div className={'resume-item text-resume-style-color'} key={item.id}>
              <Title name={item.titleImpt} subinfo={item.titleSecondary} linkPlace={item.link}/>
              <DatesAndPlace dateInit={item.date_init} city={item.city} country={item.country}
                             date_end={item.date_end}/>
              <Subtitle text={item.subtitle}/>
              <ListDescription dataDescription={item.description}/>
            </div>

          ))}


        </div>
    );
};

export default DataResume;
