'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Image from "next/image";
import {useEffect, useState} from "react";
import MyMenuModal from "@/components/MenuMobile";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {pages} from "@/constants/navbar";
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [showShadow, setShowShadow] = useState(false);
    const pathname = usePathname();


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
                    <Link href={'/'}>
                        <Image
                            src={'/../img/logo.svg'}
                            alt={'Logotipo'}
                            width={200}
                            height={100}
                        />
                    </Link>


                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="black"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <MyMenuModal pathname={pathname} open={Boolean(anchorElNav)}
                                             onClose={handleCloseNavMenu}
                                             pages={pages}/>

                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                <List sx={{display: 'flex', flexDirection: 'row'}}>
                                    {pages.map((page) => (
                                        <ListItem key={page.name}>
                                            <Link
                                                href={page.link}
                                                underline="none"
                                                className={`link-sidebar ${pathname === page.link ? 'active' : ''}`}
                                            >

                                                <ListItemText>
                                                <span style={{
                                                    fontSize: '19px',
                                                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                                                }}>{page.name}</span>
                                                </ListItemText>
                                            </Link>
                                        </ListItem>

                                    ))}
                                </List>
                            </Box>
                        </div>
                        <Box sx={{ marginLeft: '20px', display: {xs: 'none', md: 'flex'} }}>
                            <Link href={'/admin'}
                                  underline="none"
                                  className={`link-sidebar ${pathname === '/admin' ? 'active' : ''}`}
                            >
                                <ListItemIcon>
                                    <PersonIcon style={{ fontSize: '35px' }}
                                                onMouseOver={(e) => e.target.style.color = '#6366F1'} onMouseOut={(e) => e.target.style.color = 'black'}
                                    />
                                </ListItemIcon>
                            </Link>
                        </Box>

                    </div>


                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;