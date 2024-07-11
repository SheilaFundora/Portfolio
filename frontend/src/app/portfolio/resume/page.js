'use client'
import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import NameSections from "@/components/Portfolio/pageSections/NameSections";
import Box from "@mui/material/Box";
import Education from "@/components/Portfolio/resume/Education";
import DataResume from "@/components/Portfolio/resume/DataResume";
import Project from "@/components/Portfolio/resume/Project";
import Experience from "@/components/Portfolio/resume/Experience";
import {getData} from "@/helper/getData";
import {resume_end} from "@/constants/endpoints";

const Page = () => {
  const [resumeData, setResumeData] = React.useState([]);

  useEffect( () => {
    getData(resume_end, setResumeData)
  }, [])

  console.log(resumeData)

  return (
    <Box  sx={{paddingX: {xs: 4, md: '120px', mt:5},paddingY: 1, mt:3,  backgroundColor: 'rgb(247 248 252 )',
    }}>
        <NameSections name={'Resume'}/>

        <Grid container spacing={2} justifyContent="space-between" sx={{mt: 3}}>
            <Grid item xs={12} md={5}>
              {resumeData.map((item) => (
                  <DataResume key={item.id} {...item} />
                ))}

              <h1>Despues de aqui</h1>

                <Project/>

               <Experience/>
            </Grid>

            <Grid item xs={12} md={6}>
                <Education />
            </Grid>
        </Grid>
    </Box>
  );
};

export default Page;
