'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from "next/image";
import {useEffect, useState} from "react";
import MyMenuModal from "@/components/test";

const pages = [
    {
        name: 'Resumen',
        link: '/blog'
    },
    {
        name: 'Portafolio',
        link: '/blog'
    },
    {
        name: 'Contacto',
        link: '/blog'
    }
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Determina si la posición de desplazamiento es mayor que 0 para mostrar la sombra
            const shouldShowShadow = window.scrollY > 0;
            setShowShadow(shouldShowShadow);
        };

        // Agrega un listener de scroll cuando el componente se monta
        window.addEventListener('scroll', handleScroll);

        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar
            position="sticky"
            className={'bg-white'}
            elevation={0}
            style={{
                boxShadow: showShadow ? '0px 4px 8px rgba(0, 0, 0, 0.08)' : 'none',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar className={'justify-content-between'}>
                    <Image
                        src={ '/../logo.svg'}
                        alt={ 'Logotipo' }
                        width={ 200 }
                        height={ 100 }
                        className={'bg-sucess'}
                    />

                    <div>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <MyMenuModal open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} pages={pages} />

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </div>
                    

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;