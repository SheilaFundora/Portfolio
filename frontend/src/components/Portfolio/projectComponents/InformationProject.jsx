import React from 'react';
import {Grid} from "@mui/material";
import NameSections from "@/components/Portfolio/pageSections/NameSections";

const InformationProject = ({projectData}) => {
    return (
        <Grid container spacing={{ xs: 0, md: 2 }} justifyContent="space-between">
            <Grid item xs={12} md={4}>
                <div>
                    <NameSections name={'Skills'}/>
                  {
                    projectData.skills !== undefined ? (
                      projectData.skills.map((item, index) => (
                        <span key={index} className="text-style" style={{ textAlign: 'left' }}>
                        {item.name}
                          {index < projectData.skills.length - 1 && ', '}
                        </span>
                      ))
                    ) : ''
                  }
                </div>
            </Grid>
            <Grid item xs={12} md={7} >
                <div>
                    <NameSections name={'Description'}/>
                    <p className={'text-style'}>
                      {projectData.description}
                    </p>
                </div>
            </Grid>
        </Grid>
    );
};

export default InformationProject;
