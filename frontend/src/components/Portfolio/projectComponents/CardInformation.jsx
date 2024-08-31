import React from 'react';
import {Card, CardContent, Divider} from "@mui/material";
import {formatDate} from "@/helper/convertDate";

const CardInformation = ({projectData}) => {
    return (
        <Card elevation={2} style={{
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
                    <h5 style={{marginBottom: '10px', color: '#5a656e'}}>Project Information</h5>
                    <Divider/>
                  <div style={{
                    marginTop: '20px',
                    color: '#f2f2f2',
                    padding: '10px',
                    borderRadius: '5px',
                    fontFamily: 'Open Sans, sans-serif'
                  }}>
                    <p style={{color: '#5a656e'}}>
                      <strong>Category: </strong>
                      {
                        projectData.category === null ? '' : projectData.category
                      }
                    </p>
                    <p style={{color: '#5a656e'}}>
                      <strong>Category Details: </strong>
                      {
                        projectData.categoryDetail === null ? '' : projectData.categoryDetail
                      }
                    </p>
                    <p style={{
                      color: '#5a656e',
                      wordWrap: 'break-word', // Esto hace que el texto se ajuste automáticamente a la siguiente línea si es muy largo.
                      wordBreak: 'break-all'  // Esto asegura que las palabras largas se dividan si no caben en una línea.
                    }}>
                      <strong>Client: </strong>
                      {
                        projectData.client === null ? '' : projectData.client
                      }
                    </p>

                    <p style={{color: '#5a656e'}}>
                      <strong>Project date: </strong>
                      {
                        projectData.dateProject === null ? '' : formatDate(projectData.dateProject)
                      }
                    </p>
                    <p style={{color: '#5a656e'}}>
                      <strong>Website: </strong>
                      {
                        projectData.url === null ? '' : projectData.url
                      }
                    </p>
                  </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardInformation;
