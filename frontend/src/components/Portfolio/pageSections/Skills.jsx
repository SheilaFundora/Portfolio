import React, {useEffect} from 'react';
import Image from "next/image";
import Box from "@mui/material/Box";
import {useInView} from "react-intersection-observer";
import {getDataPortfolio} from "@/helper/crud/getData";
import {skill_end} from "@/constants/endpoints";
import Tooltip from '@mui/material/Tooltip';


const Skills = () => {
  const [skillData, setSkillData] = React.useState([]);

  useEffect( () => {
    getDataPortfolio(skill_end, setSkillData)
  }, [])

  const { ref, inView } = useInView({
      triggerOnce: true, // Para que la animación solo se active una vez
      threshold: 0.2, // Umbral de visibilidad, 0.5 significa que al menos la mitad del elemento debe estar visible
  });

    return (
        <div>
            <Box sx={{
                marginTop: 5,
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
              {skillData.map((skill) => (
                <Box key={skill.id}>
                  <Tooltip title={skill.name} placement="top">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={50}
                      height={40}
                      className="img-hover"
                    />
                  </Tooltip>
                </Box>
              ))}


            </Box>

        </div>

    );
};

export default Skills;
