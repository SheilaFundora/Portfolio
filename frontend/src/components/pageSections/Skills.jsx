import React from 'react';
import Image from "next/image";
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación solo se active una vez
        threshold: 0.2, // Umbral de visibilidad, 0.5 significa que al menos la mitad del elemento debe estar visible
    });

    return (
        <div>
            <Box sx={{
                marginTop: 10,
                backgroundColor: 'rgb(247 248 252 )',
                display: 'flex',
                textAlign: 'center',
                paddingY: 5,
                paddingX: { xs: 3, md: 15},
                alignItems: 'center', // Centrar verticalmente en dispositivos móviles
                justifyContent: 'center', // Ajustar el espacio entre los elementos
                flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
                gap: '30px', // Espacio entre los elementos
                '& > div': {
                    width: '100%', // Asegurar que cada elemento ocupe todo el ancho disponible
                    maxWidth: 'calc(25% - 20px)', // Establecer el ancho máximo para quepan los 4 elementos
                }
            }}
            >
                <motion.img
                    src={'/../img/tech/React.svg.png'}
                    alt={'Logotipo'}
                    ref={ref} // Ref para el elemento que queremos observar
                    width={50}
                    height={40}
                    initial={{scale: 0}} // Escala inicial de 0 (invisible)
                    animate={{scale: inView ? 1 : 0}} // Escala al tamaño original
                    transition={{duration: 0.8}} // Duración de la animación
                    className={'img-hover'}
                />

                <motion.img
                    ref={ref} // Ref para el elemento que queremos observar
                    initial={{scale: 0}} // Escala inicial de 0 (invisible)
                    animate={{scale: inView ? 1 : 0}} // Escala al tamaño original
                    transition={{duration: 0.8}} // Duración de la animación
                    src={'/../img/tech/Bootstrap_logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />
                <motion.img
                    ref={ref}
                    initial={{scale: 0}}
                    animate={{scale: inView ? 1 : 0}}
                    transition={{duration: 0.8}}
                    src={'/../img/tech/GitHub_Invertocat_Logo.svg'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />

                <motion.img
                    ref={ref}
                    initial={{scale: 0}}
                    animate={{scale: inView ? 1 : 0}}
                    transition={{duration: 0.8}}
                    src={'/../img/tech/1 n4w4forIbc05mYiIbUwSmA.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref}
                    initial={{scale: 0}}
                    animate={{scale: inView ? 1 : 0}}
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Angular_full_color_logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref}
                    initial={{scale: 0}}
                    animate={{scale: inView ? 1 : 0}}
                    transition={{duration: 0.8}}
                    src={'/../img/tech/mysql.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref}
                    initial={{scale: 0}}
                    animate={{scale: inView ? 1 : 0}}
                    transition={{duration: 0.8}}
                    src={'/../img/tech/PHP-logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref}
                    initial={{scale: 0}}
                    animate={{scale: inView ? 1 : 0}}
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Postgresql_elephant.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Python-logo-notext.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />
                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/React.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />
                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Bootstrap_logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />
                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/GitHub_Invertocat_Logo.svg'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />

                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/1 n4w4forIbc05mYiIbUwSmA.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Angular_full_color_logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/mysql.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/PHP-logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Postgresql_elephant.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Python-logo-notext.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />

                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/mysql.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/PHP-logo.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


                <motion.img
                    ref={ref} 
                    initial={{scale: 0}} 
                    animate={{scale: inView ? 1 : 0}} 
                    transition={{duration: 0.8}}
                    src={'/../img/tech/Postgresql_elephant.svg.png'}
                    alt={'Logotipo'}
                    width={50}
                    height={40}
                    className={'img-hover'}
                />


            </Box>

        </div>

    );
};

export default Skills;