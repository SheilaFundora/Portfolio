import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

const DataAbout = () => {
    return (
        <div>
            <Box sx={{
                marginTop: 10,
                backgroundColor: 'rgb(247 248 252 )',
                display: 'flex',
                textAlign: 'center',
                paddingY: 8,
                alignItems: 'center', // Centrar verticalmente en dispositivos móviles
                justifyContent: 'space-around', // Ajustar el espacio entre los elementos
                flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
                gap: '10px', // Espacio entre los elementos
                '& > div': {
                    width: '100%', // Asegurar que cada elemento ocupe todo el ancho disponible
                    maxWidth: 'calc(25% - 20px)', // Establecer el ancho máximo para quepan los 4 elementos
                }
            }}
            >
                <div>
                    <h2>20</h2>
                    <p>Anos de experiencia</p>
                </div>
                <div>
                    <h2>20k+</h2>
                    <p>Estrellas en GitHub</p>
                </div>
                <div>
                    <h2>50</h2>
                    <p>Habilidades</p>
                </div>
                <div>
                    <h2>5%</h2>
                    <p>Proyectos completados</p>
                </div>

            </Box>

        </div>
    );
};

export default DataAbout;