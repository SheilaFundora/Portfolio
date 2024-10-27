import React from 'react';
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import DatesAndPlace from "@/components/Portfolio/resume/ContentResume/DatesAndPlace";
import Subtitle from "@/components/Portfolio/resume/ContentResume/Subtitle";
import ListDescription from "@/components/Portfolio/resume/ContentResume/ListDescription";
import Box from "@mui/material/Box";
import TitleResume from "@/components/cv/TitleResume";

const ResumeData = ({data, color}) => {
    return (
        <Box>
            { data !== undefined && data.map((item) => (
                <Box key={item.id} sx={{color: color }}>
                    <TitleResume name={item.titleImpt} subinfo={item.titleSecondary} linkPlace={item.link}/>
                    <DatesAndPlace dateInit={item.date_init} city={item.city} country={item.country}
                                   date_end={item.date_end}/>
                    <Subtitle text={item.subtitle}/>
                    <ListDescription dataDescription={item.description}/>
                </Box>
            ))}
        </Box>
    );
};

export default ResumeData;
