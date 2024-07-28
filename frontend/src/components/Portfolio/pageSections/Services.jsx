import React, {useEffect} from 'react';
import CardServices from "@/components/Portfolio/other/CardServices";
import Box from "@mui/material/Box";
import {getDataPortfolio} from "@/helper/crud/getData";
import {services_end} from "@/constants/endpoints";


function Services() {
  const [serviceData, setServiceData] = React.useState([]);

  useEffect( () => {
    getDataPortfolio(services_end, setServiceData)
  }, [])

  return (
      <Box>
          <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              textAlign: 'center',
              alignItems: 'center', // Centrar verticalmente en dispositivos móviles
              justifyContent: 'space-around',
          }} >
              {serviceData.map((item, index) => (
                  <CardServices
                      key={index}
                      titulo={item.name}
                      contenido={item.description}
                      style={{
                          flexBasis: 'calc(33.3333% - 20px)'}} // Ajusta el estilo según tus necesidades
                  />
              ))}
          </Box>
      </Box>
  );
}

export default Services;
