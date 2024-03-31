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

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
        background: 'red', // Establece el fondo como transparente

    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    background: 'none', // Establece el fondo como transparente
    border: 'none', // Quita el borde
    boxShadow: 'none', // Quita la sombra
}));


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export default function PersistentDrawerLeft({children}) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleSetAnchor = () => {
        setAnchorEl(!anchorEl);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
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
                        <Link href="/login" underline="none">
                            <Typography sx={{ color: 'black' }}>Cerrar sesión</Typography>
                        </Link>
                    </MenuItem>


                </Menu>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#1C2536', // Color de fondo del Drawer
                        color: 'white', // Color del texto en el Drawer
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >

                <Box sx={{ p: 3 }}>
                    <DrawerHeader>
                        <Box
                            component={NextLink}
                            href="/"
                            sx={{
                                display: 'inline-flex',
                                height: 32,
                                width: 32
                            }}
                        >
                            <Logo />
                        </Box>
                        <IconButton onClick={handleDrawerClose}   sx={{
                            color: 'gray', // Color del ícono
                            padding: 0, // Elimina el padding interno del IconButton
                            margin: 0, // Elimina el margen del IconButton
                        }}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Box
                        sx={{
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderRadius: 1,
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2,
                            p: '12px'
                        }}
                    >
                        <div>
                            <Typography
                                color="inherit"
                                variant="subtitle1"
                            >
                                Sheila
                            </Typography>
                            <Typography
                                sx={{ color: 'gray'}}
                                variant="body2"
                            >
                                Panel de administración
                            </Typography>
                        </div>
                    </Box>
                </Box>

                <Divider sx={{ borderColor: 'neutral.700' }} />

                <Box sx={{ marginTop: 2}}>
                    <List>
                        {
                            pagesAdmin.map((page) => (
                                <SideBarItems key={page.name} route={page.link} name={page.name} icon={page.icon}/>
                            ))
                        }

                    </List>
                </Box>

            </Drawer>

            <Main open={open}  sx={{
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

