import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CardServices from "@/components/other/CardServices";
import Box from "@mui/material/Box";

const datos = [
    { titulo: 'Frontend Developer', contenido: 'Development of visual interfaces for web applications, applying good practices and adapted to the needs.' },
    { titulo: 'Database Developer', contenido: 'Development of databases, design and planning of the same according to the needs of the client.' },
    { titulo: 'Backend Developer', contenido: 'Development of the internal architecture of the page, storage communication of the page with databases.' },
    { titulo: 'Soporte', contenido: 'Maintenance of web applications, bug fixes and improvements.' },
];

function Services() {
    return (
        <Box sx={{marginTop: 4}}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'center',
                paddingY: 8,
                alignItems: 'center', // Centrar verticalmente en dispositivos móviles
                justifyContent: 'space-around',
            }} >
                {datos.map((item, index) => (
                    <CardServices
                        key={index}
                        titulo={item.titulo}
                        contenido={item.contenido}
                        style={{
                            flexBasis: 'calc(33.3333% - 20px)',
                            margin: '10px'
                        }} // Ajusta el estilo según tus necesidades
                    />
                ))}
            </Box>
        </Box>
    );
}

export default Services;
