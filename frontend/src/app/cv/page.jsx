"use client"
import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {getDataPerson} from "@/helper/crud/getDataPerson";
import './cv-styles.css'
import {resume_end, section_end} from "@/constants/endpoints";
import ContactInfo from "@/components/cv/ContactInfo";
import TitleWhite from "@/components/cv/TitleWhite";
import ImagenMe from "@/components/cv/ImagenMe";
import {getDataByParamer} from "@/helper/getDataByParamer";
import SkillsCv from "@/components/cv/SkillsCv";
import Language from "@/components/cv/Language";
import Certificate from "@/components/cv/Certificate";
import {getData} from "@/helper/crud/getData";
import ResumeData from "@/components/cv/ResumeData";
import TitleGreen from "@/components/cv/TitleGreen";


const Page = () => {
  const [personData, setPersonData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const [resumeData, setResumeData] = React.useState([]);
  const education = [];
  const experience = [];
  const project = [];

  const getResume = () => {
    if( resumeData.length > 0 ){
      resumeData.forEach(item => {
        switch (item.category_id.name) {
          case "Education":
            education.push(item);
            break;
          case "Professional Experience":
            experience.push(item);
            break;
          case "Project":
            project.push(item);
            break;
        }
      });
    }
  }

  getResume()

  useEffect( () => {
    getDataPerson( setPersonData)

    const username = process.env.NEXT_PUBLIC_USERNAME
    const endSectByTitle =  section_end  +  '/find/' +  'About/'  + username  + '/'
    getDataByParamer(endSectByTitle, setSectionData);

    getData(resume_end, setResumeData)

  }, [])

  useEffect(() => {
    if (personData.length > 0) {
      setPersonData(personData[0]); // Establece los datos de la primera persona si hay datos
    }


  }, [personData]);

  return (
    <Box className="cv-container">
      <Grid className="cv-style" container spacing={0}>
        <Grid item md={6} className={'cv-left-style'} sx={{width: '50%'}}>
          <Typography component="h1" className="person-name">
            {personData.firstName + ' ' + personData.lastName}
          </Typography>
          <Typography component="h5" className="profession-title">
            {personData.profession}
          </Typography>
          <ImagenMe/>

          <ContactInfo personData={personData}/>

          <TitleWhite title={'Profile'}/>
          <p>{sectionData ? sectionData.description : ''}</p>

          <SkillsCv />

          <TitleWhite title={'Languague'}/>
          <Language name={'Spanish'} value={5}/>
          <Language name={'English'} value={3}/>

          <TitleWhite title={'Certificates'}/>
          <Certificate name={'Lower Intermediate A2'} link={''} />
          <Certificate name={'Intermediate B1'} link={''} />
          <Certificate name={'Upper Intermediate B2'} link={''} />

          <TitleWhite title={'Education'}/>
          <ResumeData data={education} color={'white'}/>

          <TitleWhite title={'Project'}/>
          <ResumeData data={project} color={'white'}/>


        </Grid>

        <Grid item md={6} className={'cv-right-style'}  sx={{width: '50%'}}>
          <TitleGreen title={'Professional Experience'}/>
          <ResumeData data={experience} color={'black'}/>

        </Grid>
      </Grid>

    </Box>
  );
};

export default Page;
