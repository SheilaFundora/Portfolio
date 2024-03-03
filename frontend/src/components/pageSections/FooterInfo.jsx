import React from 'react';
import Box from "@mui/material/Box";
import Link from "next/link";
import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from "@mui/material/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterInfo = () => {
    return (
        <div>
            <Box sx={{
                marginTop: 10,
                backgroundColor: 'rgb(247 248 252 )',
                display: 'flex',
                paddingY: 5,
                paddingX: {xs: 3, md: 15},
                alignItems: 'flex-start', // Centrar verticalmente en dispositivos móviles
                justifyContent: 'space-beetween', // Ajustar el espacio entre los elementos
                flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
                gap: { xs: '40px', md: '80px' }
            }}
            >
                <Box sx={{ flex: '1 1 calc(35% - 80px)'}}>
                    <h2 className={'name-footer'}>Sheila</h2>
                    <p className={'text-secondary my-3 text-justify'}>
                        I am a dedicated person in all aspects of my life, committed to professional training, seeking
                        to acquire everything necessary to excel professionally.
                    </p>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row', // Mostrar los elementos en una fila horizontal
                        flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
                        width: '100%', // Asegurar que el contenedor padre ocupe todo el ancho disponible
                    }}>

                        <div >
                            <ListItem disablePadding>
                                <Link href={'/dashboard/'}>
                                    <ListItemIcon>
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '50%',
                                                padding: '6px',
                                                borderColor: '#05097c',
                                                border: '1px solid #05097c' // Añadir un borde de 2px de grosor y color #05097c
                                            }}
                                            className={'network-hov-border'}
                                        >
                                            <InstagramIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />
                                        </IconButton>
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </div>


                        <div>
                            <ListItem disablePadding>
                                <Link href={'/dashboard/'}>
                                    <ListItemIcon>
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '50%',
                                                padding: '6px',
                                                borderColor: '#05097c',
                                                border: '1px solid #05097c' // Añadir un borde de 2px de grosor y color #05097c
                                            }}
                                            className={'network-hov-border'}
                                        >
                                            <FacebookIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />
                                        </IconButton>
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </div>
                        <div>
                            <ListItem disablePadding>
                                <Link href={'/dashboard/'}>
                                    <ListItemIcon>
                                        <ListItemIcon>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '50%',
                                                    padding: '6px',
                                                    borderColor: '#05097c',
                                                    border: '1px solid #05097c' // Añadir un borde de 2px de grosor y color #05097c
                                                }}
                                                className={'network-hov-border'}
                                            >
                                                <GitHubIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />
                                            </IconButton>
                                        </ListItemIcon>
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </div>
                        <div>
                            <ListItem disablePadding>
                                <Link href={'/dashboard/'}>
                                    <ListItemIcon>
                                        <ListItemIcon>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '50%',
                                                    padding: '6px',
                                                    borderColor: '#05097c',
                                                    border: '1px solid #05097c' // Añadir un borde de 2px de grosor y color #05097c
                                                }}
                                                className={'network-hov-border'}
                                            >
                                                <LinkedInIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />
                                            </IconButton>
                                        </ListItemIcon>
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </div>
                        <div>
                            <ListItem disablePadding>
                                <Link href={'/dashboard/'}>
                                    <ListItemIcon>
                                        <ListItemIcon>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '50%',
                                                    padding: '6px',
                                                    borderColor: '#05097c',
                                                    border: '1px solid #05097c' // Añadir un borde de 2px de grosor y color #05097c
                                                }}
                                                className={'network-hov-border'}
                                            >
                                                <TwitterIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />
                                            </IconButton>
                                        </ListItemIcon>
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </div>
                    </Box>
                </Box>

                <Box sx={{ flex: '1 1 calc(30% - 80px)'}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column', // Mostrar los elementos en una fila horizontal
                        flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
                        width: '100%', // Asegurar que el contenedor padre ocupe todo el ancho disponible
                    }}>


                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="black"
                            sx={{
                                paddingX: 0,
                                pointerEvents: 'none', // Deshabilitar la interacción del cursor
                            }}
                        >
                            <LocationOnIcon sx={{ color: 'var(--blue-port)', fontSize: '30px' }} />
                            <ListItemText sx={{ textAlign: 'left', marginLeft: 3 }}>Miami, Florida </ListItemText>

                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="black"
                            sx={{
                                paddingX: 0,
                                pointerEvents: 'none' // Deshabilitar la interacción del cursor
                            }}
                        >
                            <EmailIcon sx={{ color: 'var(--blue-port)', fontSize: '30px' }} />
                            <ListItemText sx={{ textAlign: 'left', marginLeft: 3 }}>sheilafundora04@gmail.com</ListItemText>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="black"
                            sx={{
                                paddingX: 0,
                                pointerEvents: 'none', // Deshabilitar la interacción del cursor
                            }}
                        >
                            <PhoneAndroidIcon sx={{ color: 'var(--blue-port)', fontSize: '30px' }} />
                            <ListItemText sx={{ textAlign: 'left', marginLeft: 3 }}>+1 754 610 0521 </ListItemText>

                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{
                    flex: '1 1 calc(35% - 80px)',
                    display: 'flex',
                    flexDirection: 'column', // Mostrar los elementos en una fila horizontal
                    flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
                    width: '100%', // Asegurar que el contenedor padre ocupe todo el ancho disponibl// Ocultar en pantallas xs y mostrar en pantallas sm y superiores
                }}>
                    <TextField
                        label="Nombre"
                        type='text'
                        size="small"
                        sx={{
                            width: '350px',
                            borderRadius: '8px', // Agregar border-radius
                        }}
                    />
                    <TextField
                        label="Correo"
                        type='text'
                        size="small"
                        sx={{
                            width: '350px',
                            borderRadius: '8px', // Agregar border-radius
                            marginTop: '10px' // Agregar margin
                        }}
                    />
                    <TextField
                        label="Asunto"
                        type='text'
                        size="small"
                        sx={{
                            width: '350px',
                            padding: 0,
                            borderRadius: '8px', // Agregar border-radius
                            marginTop: '10px' // Agregar margin
                        }}
                    />
                    <br/>

                    <TextField
                        label="Mensaje"
                        type='text'
                        multiline
                        rows={4}
                        sx={{
                            width: '350px',
                            padding: 0,
                            borderRadius: '8px', // Agregar border-radius
                            marginTop: '10px' // Agregar margin
                        }}
                    />
                    <div  className={'mx-auto text-center mt-3'}>
                        <Button variant="contained"  style={{
                            backgroundColor: '#05097c',
                            color: 'white'
                        }}>Enviar mensaje</Button>
                    </div>

                </Box>


            </Box>

        </div>
    );
};

export default FooterInfo;