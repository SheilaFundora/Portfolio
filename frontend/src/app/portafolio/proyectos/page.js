"use client"
import React from 'react';
import NameSections from "@/components/other/NameSections";
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import {Card, CardActionArea, CardContent, CardMedia, Tabs, Typography} from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Page = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTabContent = (tipo_model) => {
        return(
            <Box className={'d-flex justify-content-center flex-wrap'} sx={{ gap: '30px' }}>
                <Link  href={'/portafolio/proyectos/view'} style={{ textDecoration: 'none' }}>
                    <Card sx={{ width: 330, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/../img/ui-project-1.jpg'
                            alt="green iguana"
                            sx={{
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Google Health Platform
                            </Typography>
                            <Typography variant="body6" color="text.secondary">
                                Web Application
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
                <Card sx={{ width: 330, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/../img/ui-project-2.jpg'
                            alt="green iguana"
                            sx={{
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Google Health Platform
                            </Typography>
                            <Typography variant="body6" color="text.secondary">
                                Web Application
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 330, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/../img/web-project-2.jpg'
                            alt="green iguana"
                            sx={{
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Google Health Platform
                            </Typography>
                            <Typography variant="body6" color="text.secondary">
                                Web Application
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 330, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/../img/web-project-2.jpg'
                            alt="green iguana"
                            sx={{
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Google Health Platform
                            </Typography>
                            <Typography variant="body6" color="text.secondary">
                                Web Application
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 330, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/../img/ui-project-2.jpg'
                            alt="green iguana"
                            sx={{
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Google Health Platform
                            </Typography>
                            <Typography variant="body6" color="text.secondary">
                                Web Application
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        )
    }


    return (
        <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
            <NameSections name={'Proyectos'}/>

            <Box sx={{ display: 'flex', justifyContent: 'center'  }} >
                <Box sx={{ borderColor: 'divider', backgroundColor: 'primary' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                        indicatorColor="none"  // Color de la línea indicadora (no se utiliza)
                        sx={{
                            backgroundColor: "#FFFFFF",  // Color de fondo blanco de las pestañas
                            borderRadius: "20px",  // Bordes redondeados de las pestañas
                            boxShadow: "0px 4px 10px rgba(128,128,128,0.55)",  // Sombra gris
                            "& .Mui-selected": {  // Establece el color de la pestaña activa
                                color: "#05097c !important" ,  // Color del texto de la pestaña activa                                fontWeight: "normal",  // Letra normal para las pestañas no activas
                                fontWeight: "bold",  // Letra normal para las pestañas no activas
                            },
                            "&.Mui-selected .MuiTab-label": {  // Establece el color del texto de la pestaña activa
                                color: "#05097c",  // Color del texto de la pestaña activa (azul oscuro)
                                fontWeight: "normal",  // Letra normal para las pestañas no activas
                            },
                        }}
                    >
                        <Tab label="Todos" {...a11yProps(0)} />
                        <Tab label="Sitios Web" {...a11yProps(1)} />
                        <Tab label="Sistemas Web" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </Box>

            <Box> {/* Contenedor para el contenido de las pestañas */}
                <CustomTabPanel value={value} index={0}>
                    {renderTabContent(1)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {renderTabContent(2)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {renderTabContent(3)}
                </CustomTabPanel>
            </Box>



        </Box>
    );
};

export default Page;