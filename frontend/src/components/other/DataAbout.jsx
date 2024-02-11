import React from 'react';
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import CounterItem from "@/components/other/CounterItem";
import { useCountUp } from 'react-countup';

const DataAbout = () => {
    useCountUp({ ref: 'experienceCounter', end: 12, duration: 2 });
    useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
    useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
    useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

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

                <CounterItem
                    title="Years of experience"
                    counter={<span id="experienceCounter" />}
                    measurement=""
                />

                <CounterItem
                    title="Stars on GitHub"
                    counter={<span id="githubStarsCounter" />}
                    measurement="k+"
                />

                <CounterItem
                    title="Positive feedback"
                    counter={<span id="feedbackCounter" />}
                    measurement="%"
                />

                <CounterItem
                    title="Projects completed"
                    counter={<span id="projectsCounter" />}
                    measurement="%"
                />
            </Box>

        </div>
);
};

export default DataAbout;