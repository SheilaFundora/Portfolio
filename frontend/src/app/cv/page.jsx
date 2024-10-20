"use client"
import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {getDataPerson} from "@/helper/crud/getDataPerson";
import './cv-styles.css'
import Image from "next/image";
import {getData} from "@/helper/crud/getData";
import {images_end} from "@/constants/endpoints";

import ContactInfo from "@/components/cv/ContactInfo";

const Page = () => {
  const [personData, setPersonData] = React.useState([]);
  const [imagesData, setImagesData] = React.useState([]);
  const imgMe = (imagesData || []).find(item => item.section === 'Me' || item.section === 'me');


  useEffect( () => {
    getDataPerson( setPersonData)
    getData(images_end, setImagesData)

  }, [])

  useEffect(() => {
    if (personData.length > 0) {
      setPersonData(personData[0]); // Establece los datos de la primera persona si hay datos
    }
  }, [personData]);

  return (
    <Grid  container spacing={0} sx={{ height: '100vh', width: '100%', margin: 0 }} >
      <Grid item md={6} className={'cv-left-style'} sx={{ width: '50%' }} >
        <Box
        >
          <Typography component="h1" className="person-name">
            {personData.firstName + ' ' + personData.lastName}
          </Typography>

          <Typography component="h5" className="profession-title">
            {personData.profession}
          </Typography>

          <Box className="image-container">
            {imgMe && imgMe.imgs &&
              <Image
                src={imgMe.imgs}
                alt="me"
                layout="responsive"
                width={60}
                height={60}
                objectFit="cover"
              />
            }
          </Box>

          <ContactInfo personData={personData}/>

        </Box>

      </Grid>

      <Grid item md={6} sx={{width: '50%'}}>
        <Typography>
          Contenido de la primera columna. Puedes poner cualquier cosa aquí: texto, imágenes, etc.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
