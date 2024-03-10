import React from 'react';
import {Grid} from "@mui/material";
import NameSections from "@/components/Portfolio/pageSections/NameSections";
import Box from "@mui/material/Box";
import Education from "@/components/Portfolio/resume/Education";
import Sumary from "@/components/Portfolio/resume/Sumary";
import Project from "@/components/Portfolio/resume/Project";
import Experience from "@/components/Portfolio/resume/Experience";

const Page = () => {
    return (
        <Box  sx={{paddingX: {xs: 4, md: '120px'},paddingY: 1, backgroundColor: 'rgb(247 248 252 )',
        }}>
            <NameSections name={'Resumen'}/>

            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={12} md={5}>
                   <Sumary/>

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