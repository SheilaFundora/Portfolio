import React from 'react';
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import CounterItem from "@/components/other/CounterItem";
import { useCountUp } from 'react-countup';
import {useInView} from "react-intersection-observer";

const DataAbout = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación se active solo una vez
        threshold: 0.5, // Umbral de visibilidad, 0.5 significa que al menos la mitad del elemento debe estar visible
    });
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
                paddingX: { xs: 3, md: 10},
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
                <motion.div
                    ref={ref} // Ref para el elemento que queremos observar
                    initial={{scale: 0}} // Escala inicial de 0 (invisible)
                    animate={{scale: inView ? 1 : 0}} // Escala al tamaño original cuando está en vista, a 0 cuando no lo está
                    transition={{duration: 0.5}} // Duración de la animación
                >
                    <CounterItem
                        title="Years of experience"
                        counter={<span id="experienceCounter"/>}
                        measurement=""
                    />
                </motion.div>

                <motion.div
                    ref={ref} // Ref para el elemento que queremos observar
                    initial={{scale: 0}} // Escala inicial de 0 (invisible)
                    animate={{scale: inView ? 1 : 0}} // Escala al tamaño original cuando está en vista, a 0 cuando no lo está
                    transition={{duration: 0.8}} // Duración de la animación
                >
                    <CounterItem
                        title="Stars on GitHub"
                        counter={<span id="githubStarsCounter"/>}
                        measurement="k+"
                    />
                </motion.div>

                <motion.div
                    ref={ref} // Ref para el elemento que queremos observar
                    initial={{scale: 0}} // Escala inicial de 0 (invisible)
                    animate={{scale: inView ? 1 : 0}} // Escala al tamaño original cuando está en vista, a 0 cuando no lo está
                    transition={{duration: 0.8}} // Duración de la animación
                >
                    <CounterItem
                        title="Positive feedback"
                        counter={<span id="feedbackCounter"/>}
                        measurement="%"
                    />
                </motion.div>

                <motion.div
                    ref={ref} // Ref para el elemento que queremos observar
                    initial={{scale: 0}} // Escala inicial de 0 (invisible)
                    animate={{scale: inView ? 1 : 0}} // Escala al tamaño original cuando está en vista, a 0 cuando no lo está
                    transition={{duration: 0.8}} // Duración de la animación
                >
                    <CounterItem
                        title="Projects completed"
                        counter={<span id="projectsCounter"/>}
                        measurement="%"
                    />
                </motion.div>
            </Box>

        </div>
);
};

export default DataAbout;