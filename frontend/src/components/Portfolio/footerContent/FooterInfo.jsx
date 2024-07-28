import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import SocialNet from "@/components/Portfolio/footerContent/SocialNet";
import DataUserFoot from "@/components/Portfolio/footerContent/DataUserFoot";
import FormContact from "@/components/Portfolio/footerContent/FormContact";
import {section_end} from "@/constants/endpoints";
import {getDataByParamer} from "@/helper/getDataByParamer";


const FooterInfo = ({user}) => {
  const [sectionData, setSectionData] = React.useState([]);

  useEffect( () => {
    const endSectByTitle =  section_end  +  '/title/' +  'Footer/'

    getDataByParamer(endSectByTitle, setSectionData)

  }, [])

  return (
      <Box sx={{
          marginTop: 10,
          backgroundColor: 'rgb(247 248 252 )',
          display: 'flex',
          paddingY:5,
          paddingX: {xs: 4, md: 15},
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start', // Centrar verticalmente en dispositivos móviles
          justifyContent: 'center', // Ajustar el espacio entre los elementos
          flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
          gap: { xs: '40px', md: '80px' }
      }}
      >
        <Box sx={{ flex: '1 1 calc(33% - 80px)'}}>
          <h2 className={'name-footer'}>{user ? user.firstName : ''}</h2>
          <p className={'text-secondary my-3 text-justify'}  style={{ textAlign: 'justify' }} >
            {sectionData.description}
          </p>
          <SocialNet />
        </Box>

        <DataUserFoot user={user} />

        <FormContact />
      </Box>

  );
};

export default FooterInfo;
