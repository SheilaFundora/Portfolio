import React from 'react';
import Box from "@mui/material/Box";
import Image from "next/image";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const FirstSection = () => {
  const {user} = useSelector((state) => state.person)

  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/uc?id=1kK-OH_EzgKrIlOyzAQc1k_IZ81OHZZsE'; // URL de descarga directa desde Google Drive
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.click();
  };

  return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: { xs: 2, md: 0 }
            }}
        >
          <Box sx={{textAlign: {xs: 'center', md: 'left'}, marginTop: {xs: '50px', md: '0'}}}>
            <h2 style={{fontWeight: 'bold'}}>
              HI, I AM {user ? user.firstName : '...'}
            </h2>

            <h4 style={{color: 'gray', marginTop: '15px'}}>A {user ? user.profession : '...'}t</h4>
            <button className={'dow-cv'} onClick={handleDownload}>
              <ListItemButton>
                <ArrowCircleDownIcon/>
                <ListItemText sx={{marginLeft: '10px'}}> <b>Descargar CV </b></ListItemText>
              </ListItemButton>
            </button>
          </Box>

          <Box sx={{width: {xs: '100%', md: '65%'}, marginTop: {xs: 2, md: 0}}}>

            <motion.img
                    src={'/img/developer.svg'}
                    initial={{y: -120}}
                    animate={{y: 0}}
                    transition={{duration: 1}}
                    alt="Imagen"
                />

          </Box>

        </Box>
  );
};

export default FirstSection;
