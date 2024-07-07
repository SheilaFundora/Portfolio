'use client'
import React from 'react';
import Box from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CarrouselImage from "@/components/Portfolio/proyectComponents/CarrouselImage";
import CardInformation from "@/components/Portfolio/proyectComponents/CardInformation";
import InformationsProyect from "@/components/Portfolio/proyectComponents/InformationsProyect";


const items = [
    {
        src: '/img/ui-project-1.jpg'

    },{
        src: '/img/ui-project-2.jpg'

    },
    {
        src: '/img/2.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    },
    {
        src: '/img/4.png'

    }
]

const Page = () => {
    return (
        <Box sx={{marginTop: '50px', paddingX: {xs: 4, md: '120px'}}}>
            <h2>Google Health Platform</h2>
            <div className={'d-flex gap-5 mt-3'}>
                <div style={{color: '#333', fontSize: '1rem'}}>
                    <AccessTimeIcon/>
                    <span className={'ms-2'}>Jul 26, 2021</span>
                </div>
                <div style={{color: '#333', fontSize: '1rem'}}>
                    <SellOutlinedIcon/>
                    <span className={'ms-2'}>Web</span>
                </div>
            </div>

            <div style={{
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: {xs: 'column', md: 'row'},
                flexWrap: 'wrap'
            }}>
                <CarrouselImage items={items} />
                <CardInformation />
            </div>

            <InformationsProyect/>
        </Box>
    );
};

export default Page;

