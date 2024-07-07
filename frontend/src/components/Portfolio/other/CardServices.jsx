import React from 'react';
import {Card, CardContent,} from "@mui/material";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import Box from "@mui/material/Box";
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import IconButton from "@mui/material/IconButton";
import WebIcon from '@mui/icons-material/Web';
import WorkIcon from '@mui/icons-material/Work';

const CardServices = ({titulo, contenido}) => {
  const icons = {
    backend: <CodeOffIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />,
    frontend: <CodeOffIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />,
    database: <StorageIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />,
    support: <BuildIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />,
    office: <WorkIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />,
    web: <WebIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />,
  };

  const findMatchingIcon = (title) => {
    const cleanTitle = title.toLowerCase().replace(/\s/g, '');

    for (let key in icons) {
      const cleanKey = key.toLowerCase().replace(/\s/g, '');
      if (cleanTitle.includes(cleanKey)) {
        return icons[key]; // Devolver el icono correspondiente
      }
    }
    return '';
  }

  const icon = findMatchingIcon(titulo);

  return (
      <Box sx={{ width: { xs: '320px', md: '250px' }, height: '300px', padding: '10px', marginTop: '20px' }} >
          <Card elevation={5} style={{ height: '100%' }} className={'card-hov'}>
              <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                      <IconButton
                          sx={{
                              backgroundColor: 'var(--blue-port)',
                              borderRadius: '50%',
                              padding: '10px',
                          }}
                          className={'card-hov-icon'}
                      >
                        {icon}
                        </IconButton>
                      <div style={{ marginTop: '20px' }}>
                          <h5 style={{ marginBottom: '10px' }}>{titulo}</h5> {/* Aplica margen inferior al título */}
                          <p>{contenido}</p>
                      </div>
                  </div>
              </CardContent>
          </Card>
      </Box>
  );
};

export default CardServices;
