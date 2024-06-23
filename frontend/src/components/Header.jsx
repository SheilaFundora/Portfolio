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
import MyMenuModal from "@/components/Portfolio/other/MenuMobile";
import {Hidden, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {routesPage} from "@/constants/apiRoutesPage";
import {routesAuth} from "@/constants/apiRoutesAuth";
import PersonIcon from '@mui/icons-material/Person';
import {motion} from "framer-motion";

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
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>

                <Container maxWidth="lg">
                    <Toolbar className={'justify-content-between'}>
                        <Link href={'/'}>
                            <div>
                                {/* Oculta la imagen en dispositivos móviles */}
                                <Hidden only={['xs', 'sm']}>
                                    <Image
                                        src={'/img/logotipo.jpg'}
                                        alt={'Logotipo'}
                                        width={180}
                                        height={70}
                                        priority
                                    />
                                </Hidden>

                                {/* Muestra la imagen pequeña en pantallas pequeñas */}
                                <Hidden only={['md', 'lg', 'xl']}>
                                    <Image
                                        src={'/img/logotipo.jpg'}
                                        alt={'Logotype'}
                                        width={150}
                                        height={70}
                                    />
                                </Hidden>
                            </div>
                        </Link>


                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                                        <MenuIcon style={{fontSize: 35}}/>
                                    </IconButton>
                                    <MyMenuModal pathname={pathname} open={Boolean(anchorElNav)}
                                                 onClose={handleCloseNavMenu}
                                                 pages={routesPage}/>

                                </Box>

                                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                    <List sx={{display: 'flex', flexDirection: 'row'}}>
                                        {routesPage.map((page) => (
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

                            <Box sx={{marginLeft: '20px', display: {xs: 'none', md: 'flex'}}}>
                              <Link href={routesAuth[0].link} underline="none" className={`link-sidebar-admin ${pathname === '/auth/login' ? 'active' : ''}`}>
                                    <ListItemIcon>
                                        <PersonIcon style={{fontSize: '35px'}}
                                                    onMouseOver={(e) => e.target.style.color = '#05097c '}
                                                    onMouseOut={(e) => e.target.style.color = 'black'}
                                        />
                                    </ListItemIcon>
                                </Link>
                            </Box>

                        </div>


                    </Toolbar>
                </Container>

            </motion.div>

        </AppBar>
)
    ;
}

export default Header;
