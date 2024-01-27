'use client'
import React from 'react';
import Box from "@mui/material/Box";
import Image from "next/image";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const FirstSection = () => {
    const handleDownload = () => {
        const pdfUrl = '../cv/sheila-cv.pdf'; // Reemplaza con la ruta correcta
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'sheila-cv.pdf'; // Puedes cambiar el nombre del archivo si lo deseas
        link.click();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }} >
            <Box sx={{ textAlign: { xs: 'center', md: 'left'}, marginTop: {xs:'20px', md:'0'} }}>
                <h2 style={{ fontWeight: 'bold'}}>HI, IAM STOMAN</h2>
                <h4 style={{ color: 'gray', marginTop: '15px'}}>A Full-Stack Developer & Design Enthusiast</h4>
                <button className={'dow-cv'} onClick={handleDownload}>
                    <ListItemButton>
                        <ArrowCircleDownIcon />
                        <ListItemText sx={{ marginLeft: '10px'}}> <b>Descargar CV </b></ListItemText>
                    </ListItemButton>
                </button>
            </Box>

            <div style={{ width: '66%' }}>
                <Image
                    src={ '../img/developer.svg'}
                    alt={ 'Developer' }
                    width={ 750 }
                    height={ 500 }
                    layout="responsive"
                />
            </div>

        </Box>
    );
};

export default FirstSection;