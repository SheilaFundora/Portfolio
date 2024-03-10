import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const CardServices = ({titulo, contenido}) => {
    return (
        <Box sx={{ width: { xs: '320px', md: '250px' }, height: '300px', padding: '10px', marginTop: '20px' }} >
            <Card elevation={5} style={{ height: '100%' }} className={'card-hov'}>
                <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <IconButton
                            sx={{
                                backgroundColor: '#2196f3',
                                borderRadius: '50%',
                                padding: '10px',
                            }}
                            className={'card-hov-icon'}
                        >
                            <CodeIcon sx={{ color: 'white', fontSize: '36px' }} className={'card-hov-icon-text'} />
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