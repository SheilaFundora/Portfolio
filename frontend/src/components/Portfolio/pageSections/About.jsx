import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';



const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación solo se active una vez
        threshold: 0.1, // Umbral de visibilidad, 0.5 significa que al menos la mitad del elemento debe estar visible
    });

    return (
        <Box>
            <p className={'text-style'}>
                It's been four years since I wrote my first line of code, from that moment
                I knew I wanted to be a informatic science engineer, now I'm a software
                developer with the knowledge and skills necessary to carry out said
                profession. Programmer focused on developing skills learning what I propose.
                Passionate about good software development practices.
            </p>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    marginTop: 4,
                }}
            >

                <motion.img
                    ref={ref} // Ref para el elemento que queremos observar
                    initial={{x: -120}}  // Animación inicial desde la izquierda (-120px)
                    animate={{x: inView ? 0 : -120}} // Animación hacia la derecha (0px) cuando está en vista, de lo contrario -120px
                    transition={{duration: 0.6}}
                    src={'/img/personal.jpg'}
                    alt={'Developer'}
                    width={250}
                    height={300}
                />
                <Box
                    sx={{
                        marginLeft: {xs: 0, md: '100px'}, width: '100%'
                    }}
                >
                    <Box sx={{paddingTop: {xs: 3, md: 0}}}>
                        <h2 style={{color: '#545556', fontFamily: '"Playfair Display", serif'}}>
                            Software Engineer Developer
                        </h2>
                    </Box>

                    <Grid container spacing={2} sx={{marginTop: {xs: 0, md: 1}}}>
                        <Grid item xs={12} md={8} lg={6}>
                            <p><b style={{color: '#545556'}}>Birthday:</b> 04/09/2000</p>
                            <p><b style={{color: '#545556'}}>Phone:</b> +1 754 610 0521</p>
                            <p><b style={{color: '#545556'}}>City: </b>Estados Unidos, Florida</p>
                            <p><b style={{color: '#545556'}}>Email: </b>sheilafundora04@gmail.com</p>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <p><b style={{color: '#545556'}}>Degree:</b> Engineer</p>
                            <p><b style={{color: '#545556'}}>Level: </b>Junior</p>
                            <p><b style={{color: '#545556'}}>Freelance: </b>Available</p>
                            <p><b style={{color: '#545556'}}>Remote:</b> Available</p>
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        </Box>
    );
};

export default About;