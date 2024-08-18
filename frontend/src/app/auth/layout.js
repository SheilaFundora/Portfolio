'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import "../../styles/adminStyle.css"
import {Grid} from "@mui/material";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {useEffect} from "react";
import { getDataPortfolio} from "@/helper/crud/getData";
import {images_end} from "@/constants/endpoints";

export default function PersistentDrawerLeft({children}) {
  const [imagesData, setImagesData] = React.useState([]);
  const imgLogo = (imagesData || []).find(item => item.section === 'Logo' || item.section === 'logo');


  useEffect( () => {
    getDataPortfolio(images_end, setImagesData)
  }, [])

  return (
      <Box
          component="main"
          sx={{
            display: 'flex',
            flex: '1 1 auto'
          }}
      >
        <Grid
          container
          sx={{ flex: '1 1 auto' }}
        >
          <Grid
            xs={12}
            lg={6}
            sx={{
              backgroundColor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
              <div className={'m-2'}>
                {
                  imgLogo && imgLogo.imgs ?
                    <Image
                      src={ imgLogo.imgs }
                      alt={'Logo'}
                      width={60}
                      height={60}
                      priority
                    />
                    :
                    ''
                }
              </div>
              <Container component="main" maxWidth="sm"  >
                <CssBaseline/>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {children}
                </Box>
              </Container>
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              alignItems: 'center',
              background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              '& img': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                color="inherit"
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  mb: 1
                }}
                variant="h1"
              >
                Welcome to{' '}
                <Box
                  component="span"
                  sx={{ color: '#15B79E' }}
                  target="_blank"
                >
                  sheila's portfolio
                </Box>
              </Typography>
              <img
                alt=""
                src="/img/auth-illustration.svg"
              />
            </Box>
          </Grid>
        </Grid>

      </Box>
    );
}

