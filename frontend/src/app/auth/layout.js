'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import "../../styles/adminStyle.css"
import {Button, Grid, ListItemText, Menu, MenuItem, Stack} from "@mui/material";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Typography from "@mui/material/Typography";
import {ThemeProvider} from "@mui/material/styles";
import Image from "next/image";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import {routesAuth} from "@/constants/apiRoutesAuth";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Copyright} from "@mui/icons-material";

const drawerWidth = 280;

export default function PersistentDrawerLeft({children}) {


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
                  <Image
                    src={'/img/favorite.jpg'}
                    alt={'Logotipo'}
                    width={60}
                    height={60}
                  />
                </div>
                <Container component="main" maxWidth="sm"  >
                  <CssBaseline/>
                  <Box
                    sx={{
                      marginTop: 3,
                      paddingX: 3,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {children}
                  </Box>
                  <Typography variant="body1" align="center" color="textSecondary" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    © {new Date().getFullYear()} <span style={{ color: '#05097c' }}>Sheila</span>. Todos los derechos reservados.
                  </Typography>

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
                  src="/assets/auth-illustration.svg"
                />
              </Box>
            </Grid>
          </Grid>

        </Box>
    );
}

