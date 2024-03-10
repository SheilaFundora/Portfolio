'use client'
import React from 'react';
import Box from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from "next/image";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import Carousel from 'react-material-ui-carousel'
import {Button, Card, CardContent, Divider, Grid, Paper} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CodeIcon from "@mui/icons-material/Code";
import NameSections from "@/components/other/NameSections";


const items = [
    {
        src: '/../img/ui-project-1.jpg'

    },{
        src: '/../img/ui-project-2.jpg'

    },
    {
        src: '/../img/2.png'

    },
    {
        src: '/../img/4.png'

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
                <Carousel sx={{
                    width: '65%',
                    height: '400px',
                    border: 'none',
                    justifyContent: 'flex-start',
                }}>
                    {items.map((item, i) => (
                        <div style={{width: '100%', paddingTop: '100%'}}>
                            <Image
                                src={item.src}
                                alt={'Logotipo'}
                                layout="fill"
                                key={i}
                                objectFit="contain"
                                objectPosition="top center"
                                style={{borderRadius: '5px'}}
                            />
                        </div>
                    ))}
                </Carousel>
                <Card elevation={2} style={{height: '100%', width: '300px'}}>
                    <CardContent style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '20px'
                    }}>
                        <div style={{marginTop: '20px'}}>
                            <h5 style={{marginBottom: '10px', color: '#5a656e'}}>Información del
                                Proyecto
                            </h5>
                            <Divider/>
                            <div style={{
                                marginTop: '20px',
                                color: '#f2f2f2',
                                padding: '10px',
                                borderRadius: '5px',
                                fontFamily: 'Open Sans, sans-serif'
                            }}>
                                <p style={{color: '#5a656e'}}><strong>Category:</strong> Web</p>
                                <p style={{color: '#5a656e'}}><strong>Client:</strong> School project</p>
                                <p style={{color: '#5a656e'}}><strong>Project date:</strong> Dec. 14, 2022</p>
                                <p style={{color: '#5a656e'}}><strong>Website:</strong> https://company.com</p>
                                <p style={{color: '#5a656e'}}><strong>phone:</strong> 555 8888 888</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={12} md={4}>
                    <div>
                        <NameSections name={'Tecnologias'}/>

                        <p className={'text-style '} style={{textAlign: 'left'}}>
                            Html, Css, Js, Boostrap, Python, Django, Postgresql
                        </p>
                    </div>
                    <div>
                        <NameSections name={'Objective'}/>

                        <p className={'text-style'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam
                            enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} md={7} >
                    <div>
                        <NameSections name={'Descripción'}/>
                        <p className={'text-style'}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
                            dignissimos
                            cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt,
                            fugit
                            eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur
                            adipisicing
                            elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus
                            similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis
                            labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero
                            tenetur neque consequatur ea.
                        </p>
                    </div>
                </Grid>
            </Grid>


        </Box>
    );
};

export default Page;

