import React from 'react';
import {ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from "@mui/material/Box";

const DataUserFoot = ({user}) => {
  return (
    <Box sx={{ flex: '1 1 calc(33% - 80px)'}}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column', // Mostrar los elementos en una fila horizontal
        flexWrap: 'wrap', // Envolver los elementos si no caben en una sola fila
        width: '100%', // Asegurar que el contenedor padre ocupe todo el ancho disponible
      }}>


        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="black"
          sx={{
            paddingX: 0,
            pointerEvents: 'none', // Deshabilitar la interacción del cursor
          }}
        >
          <LocationOnIcon sx={{ color: 'var(--blue-port)', fontSize: '30px' }} />
          <ListItemText sx={{ textAlign: 'left', marginLeft: 3 }}>{user ? user.address : ''} </ListItemText>

        </IconButton>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="black"
          sx={{
            paddingX: 0,
            pointerEvents: 'none' // Deshabilitar la interacción del cursor
          }}
        >
          <EmailIcon sx={{ color: 'var(--blue-port)', fontSize: '30px' }} />
          <ListItemText sx={{ textAlign: 'left', marginLeft: 3 }}>{user ? user.email : ''}</ListItemText>
        </IconButton>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="black"
          sx={{
            paddingX: 0,
            pointerEvents: 'none', // Deshabilitar la interacción del cursor
          }}
        >
          <PhoneAndroidIcon sx={{ color: 'var(--blue-port)', fontSize: '30px' }} />
          <ListItemText sx={{ textAlign: 'left', marginLeft: 3 }}>{user ? user.phone : ''} </ListItemText>

        </IconButton>
      </Box>
    </Box>
  );
};

export default DataUserFoot;
