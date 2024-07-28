'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/adminStyle.css"
import { Menu, MenuItem} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {useEffect, useState} from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import {routesAuth} from "@/constants/apiRoutesAuth";
import { useRouter} from "next/navigation";
import Loading from "@/components/Loading";
import DrawerPersonalized from "@/components/adminComponents/Sidebar/DrawerPersonalized";
import LogoutIcon from '@mui/icons-material/Logout';
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ModalChangePass from "@/components/adminComponents/other/ModalChangePass";
import {fetchDataToken, fetchValidateToken} from "@/helper/fetch";
import {images_end, validateToken_end} from "@/constants/endpoints";
import {getData} from "@/helper/crud/getData";
import Image from "next/image";

const drawerWidth = 280;
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

export default function PersistentDrawerLeft({children}) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [openModalCP, setOpenModalCP] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [imagesData, setImagesData] = React.useState([]);
  const imgMe = (imagesData || []).find(item => item.section === 'Me' || item.section === 'me');

console.log(imgMe)
  useEffect( () => {
    getData(images_end, setImagesData)
  }, [])

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleOpenModalCP = () => {
    setAnchorEl(false);
    setOpenModalCP(!openModalCP);
  };
  const handleSetAnchor = () => {
      setAnchorEl(!anchorEl);
  };
  const handleLoading = () => {
    setIsLoading(!setIsLoading);
  };

  const handleLogout = () => {
    handleLoading();
    window.localStorage.clear()
    router.push(routesAuth[0].link)
  };

  const verifyToken = async () => {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');
    const id = window.localStorage.getItem('id');
    setUsername(username);

    if (!token || !username || !id) {
      router.push('/auth/login');
    } else {
      try {
        fetchValidateToken(validateToken_end).then((isValid) => {
          console.log(isValid)
          if( isValid.status === 401){
            window.localStorage.clear()
            router.push(routesAuth[0].link)
          }
        })
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };


  useEffect( () => {
    verifyToken()
  }, [router.asPath])

  if (isLoading ) {
    return (
      <Loading infoText='Loading' />
    )
  }
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
              <MenuItem >
                <div onClick={handleLogout} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'black' }}>Logout
                    <span className={'ms-2'}><LogoutIcon fontSize="small" /></span>
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem >
                <div onClick={handleOpenModalCP} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'black' }}>Change pass</Typography>
                </div>
              </MenuItem>
            </Menu>
          </Box>

        </Box>
      </AppBar>

      { openDrawer ?
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
          <DrawerPersonalized username={username}/>
        </Drawer>
        :
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
          <DrawerPersonalized username={username}/>
        </Drawer>
      }


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


      {openModalCP &&
        <ModalForm modal={<ModalChangePass handleClickOpen={handleOpenModalCP}/>}
                   openModal={openModalCP}
                   handleClickOpen={handleOpenModalCP}
        />
      }
    </Box>
    );
}

