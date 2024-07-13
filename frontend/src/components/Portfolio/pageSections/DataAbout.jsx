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

  return (
      <div>
        <Box sx={{
          marginTop: 10,
          backgroundColor: 'rgb(247 248 252 )',
          display: 'flex',
          textAlign: 'center',
          paddingY: 8,
          paddingX: {xs: 3, md: 10},
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

          <div style={{marginTop: '5px'}}>
            <span style={{fontSize: '1.9em', fontWeight: '500'}}>{user.experience}</span>
            <p style={{marginTop: '5px'}}>Years of experience</p>
          </div>


          <div style={{marginTop: '5px'}}>
            <span style={{fontSize: '1.9em', fontWeight: '500'}}>{skill.length}</span>
            <p style={{marginTop: '5px'}}>Core Skill</p>
          </div>


          <div style={{marginTop: '5px'}}>
            <span style={{fontSize: '1.9em', fontWeight: '500'}}>{service.length}</span>
            <p style={{marginTop: '5px'}}>Services Offered</p>
          </div>

          <div style={{marginTop: '5px'}}>
            <span style={{fontSize: '1.9em', fontWeight: '500'}}>{project.length}</span>
            <p style={{marginTop: '5px'}}>Projects completed</p>
          </div>

        </Box>

      </div>
  );
};

export default DataAbout;
