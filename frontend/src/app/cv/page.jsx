"use client"
import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {getDataPerson} from "@/helper/crud/getDataPerson";
import './cv-styles.css'
import {section_end} from "@/constants/endpoints";
import ContactInfo from "@/components/cv/ContactInfo";
import TittleWhite from "@/components/cv/TittleWhite";
import ImagenMe from "@/components/cv/ImagenMe";
import {getDataByParamer} from "@/helper/getDataByParamer";
import SkillsCv from "@/components/cv/SkillsCv";

const Page = () => {
  const [personData, setPersonData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);

  useEffect( () => {
    getDataPerson( setPersonData)
    const username = process.env.NEXT_PUBLIC_USERNAME

    const endSectByTitle =  section_end  +  '/find/' +  'About/'  + username  + '/'
    getDataByParamer(endSectByTitle, setSectionData);

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

          <TittleWhite title={'Profile'}/>
          <p>{sectionData ? sectionData.description : ''}</p>

          <SkillsCv />


        </Grid>

        <Grid item md={6} sx={{width: '50%'}}>
          <Typography>
            Contenido de la primera columna. Puedes poner cualquier cosa aquí: texto, imágenes, etc.
          </Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Page;
