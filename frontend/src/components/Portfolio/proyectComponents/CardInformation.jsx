import React from 'react';
import {Card, CardContent, Divider} from "@mui/material";

const CardInformation = () => {
    return (
        <Card elevation={2} style={{
            height: '100%',
            width: {xs: '600px', md: '300px'},
            marginLeft: '20px'

        }}>
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
    );
};

export default CardInformation;