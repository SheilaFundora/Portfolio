'use client'
import React from 'react';
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import CardIndex from "@/components/adminCompoents/other/index/CardIndex";
import {CurrencyDollarIcon} from "@heroicons/react/16/solid";
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LanguageIcon from '@mui/icons-material/Language';
import {BarGraph} from "@/components/adminCompoents/other/index/BarGraph";
import PastelGraph from "@/components/adminCompoents/other/index/PastelGraph";
import axios from "axios";

const Page = () => {


  console.log('Componente montado');

  useEffect( () => {
    console.log('Ejecutando useEffect');
  }, [])

  return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2
        }}
      >
        <Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
            >
              <CardIndex name={'Projects'} value={32} color={'secondary.main'} icon={<LanguageIcon />}/>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
            >
              <CardIndex name={'Money'} value={'$290'} color={'success.main'} icon={<CurrencyDollarIcon />}/>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
            >
              <CardIndex name={'Views'} value={'12k'} color={'warning.main'} icon={<VisibilityIcon />}/>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
            >
              <CardIndex name={'Skills'} value={32} color={'primary.main'} icon={<CodeIcon />}/>
            </Grid>

            <Grid
              item
              xs={12}
              lg={8}
              sx={{marginTop: 3}}
            >
              <BarGraph/>
            </Grid>

            <Grid
              item
              xs={12}
              lg={4}
              sx={{marginTop: 3}}
            >
              <PastelGraph />

            </Grid>

          </Grid>
        </Box>

      </Box>
    );
};

export default Page;
