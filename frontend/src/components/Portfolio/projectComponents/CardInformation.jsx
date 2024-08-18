import React from 'react';
import {Card, CardContent, Divider} from "@mui/material";
import {formatDate} from "@/helper/convertDate";

const CardInformation = ({projectData}) => {
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
                      <strong>Client: </strong>
                      {
                        projectData.client === null ? '' : projectData.client
                      }
                    </p>
                    <p style={{color: '#5a656e'}}>
                      <strong>Project date: </strong>
                      {
                        projectData.dateProject === null ? '' :  formatDate(projectData.dateProject)
                      }
                    </p>
                    <p style={{color: '#5a656e'}}>
                      <strong>Website: </strong>
                      {
                        projectData.url === null ? '' : projectData.url
                      }
                    </p>
                    <p style={{color: '#5a656e'}}>
                      <strong>Phone: </strong>
                      {
                        projectData.client === null ? '' : projectData.client
                      }
                    </p>
                  </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardInformation;
