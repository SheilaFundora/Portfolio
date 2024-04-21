'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NextLink from 'next/link';
import {Logo} from "@/components/adminCompoents/Sidebar/logo";
import {pagesAdmin} from "@/constants/apiRoutesAdmin";
import SideBarItems from "@/components/adminCompoents/Sidebar/sideBarItems";
import "../../styles/adminStyle.css"
import {Button, ListItemText, Menu, MenuItem} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import ContentsDrawer from "@/components/adminCompoents/Sidebar/DrawerPersonalized";
import {useEffect, useState} from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'

const drawerWidth = 280;

export default function PersistentDrawerLeft({children}) {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const [openDrawer, setOpenDrawer] = React.useState(true);

    const handleOpenDrawer = () => {
      setOpenDrawer(!openDrawer);
    };
    const handleSetAnchor = () => {
        setAnchorEl(!anchorEl);
    };


  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        marginLeft: 0,
        padding: theme.spacing(5),
      }),
    }),
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open, showShadow }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    border: 'none', // Quita el borde
    backgroundColor: '#f5f5f5',
    boxShadow: 'none',
  }));


  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  }));


  return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed"
                    open={openDrawer}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleOpenDrawer}
                    sx={{
                      mr: 2,
                      display: { xs: openDrawer ? 'block' : 'block', sm: 'none' },
                      color: 'gray',
                      padding: 2
                    }}
                  >
                    <MenuIcon  sx={{fontSize: '28px'}}/>
                  </IconButton>
                </Toolbar>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginY: 2, marginX: 3 }}>
                  <IconButton onClick={handleSetAnchor}>
                    <Avatar alt="Cindy Baker" src={'/img/me.jpg'} sx={{ width: 50, height: 50 }} />
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleSetAnchor}
                  sx={{ marginTop: '70px'}}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem>
                    <Link href="/login" underline="none" style={{ textDecoration: 'none' }}>
                      <Typography sx={{ color: 'black' }}>Logout</Typography>
                    </Link>

                  </MenuItem>
                </Menu>
              </Box>
            </AppBar>

            <Drawer
              sx={{
                width: drawerWidth,
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: '#1C2536', // Color de fondo del Drawer
                  color: 'white', // Color del texto en el Drawer
                },
              }}
              variant="temporary"
              anchor="left"
              open={!openDrawer}
              onClose={handleOpenDrawer}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <ContentsDrawer/>
            </Drawer>

            <Drawer
                sx={{
                    width: drawerWidth,
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                          width: drawerWidth,
                          boxSizing: 'border-box',
                          backgroundColor: '#1C2536', // Color de fondo del Drawer
                          color: 'white', // Color del texto en el Drawer
                    },
                }}
                variant="permanent"
                anchor="left"
                open={openDrawer}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
            >
              <ContentsDrawer/>
            </Drawer>

            <Main open={openDrawer}  sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                height: '100vh',
                overflow: 'auto',
            }}>
                <DrawerHeader />
                    {children}
                <DrawerHeader />
            </Main>
        </Box>
    );
}

