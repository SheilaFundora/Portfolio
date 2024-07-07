import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import CounterItem from "@/components/Portfolio/other/CounterItem";
import { useCountUp } from 'react-countup';
import {useInView} from "react-intersection-observer";
import {useSelector} from "react-redux";
import {getData} from "@/helper/getData";
import {project_end, services_end, skill_end} from "@/constants/endpoints";

const DataAbout = () => {
  const { user } = useSelector((state) => state.person);

  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState([]);
  const [service, setService] = useState([]);

  useEffect( () => {
    getData(project_end, setProject)
    getData(skill_end, setSkill)
    getData(services_end, setService)

  }, [])
  const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación se active solo una vez
        threshold: 0.5, // Umbral de visibilidad, 0.5 significa que al menos la mitad del elemento debe estar visible
    });

  console.log(project)


  useCountUp({ ref: 'experienceCounter', end: user ? user.experience : '', duration: 2 });
  useCountUp({ ref: 'servicesCounter', end: service.length, duration: 2 });
  useCountUp({ ref: 'skillCounter', end: skill.length, duration: 2 });
  useCountUp({ ref: 'projectsCounter', end: project.length, duration: 2 });

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
              <CounterItem
                title="Years of experience"
                counter={<span id="experienceCounter"/>}
                measurement=""
              />

              <CounterItem
                title="Core Skill"
                counter={<span id="skillCounter"/>}
                measurement=""
              />

              <CounterItem
                  title="Services Offered"
                  counter={<span id="servicesCounter"/>}
                  measurement=""
              />

              <CounterItem
                  title="Projects completed"
                  counter={<span id="projectsCounter"/>}
                  measurement=""
              />
            </Box>

        </div>
);
};

export default DataAbout;
