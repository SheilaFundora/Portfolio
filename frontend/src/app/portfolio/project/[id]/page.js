'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CarrouselImage from "@/components/Portfolio/projectComponents/CarrouselImage";
import CardInformation from "@/components/Portfolio/projectComponents/CardInformation";
import InformationProject from "@/components/Portfolio/projectComponents/InformationProject";
import {project_end} from "@/constants/endpoints";
import {getDataByParamer, getProjectById} from "@/helper/getDataByParamer";
import {formatDate} from "@/helper/convertDate";

const Page = ({params}) => {
  const [projectData, setProjectData] = React.useState([]);

  useEffect( () => {
    const username = process.env.NEXT_PUBLIC_USERNAME

    const endProjectById =  project_end + '/'   + username  + '/' + params.id  + '/'
    console.log(endProjectById)


    getProjectById(endProjectById, setProjectData)

  }, [])
  console.log(projectData)
    return (
        <Box sx={{marginTop: '50px', paddingX: {xs: 4, md: '120px'}}}>
          <h2>{projectData.name}</h2>
          <div className={'d-flex gap-5 mt-3'}>
            {
              projectData.dateProject === null ? '' :
                <div style={{color: '#333', fontSize: '1rem'}}>
                  <AccessTimeIcon/>
                  <span className={'ms-2'}>{formatDate(projectData.dateProject)}</span>
                </div>
            }
            {
              projectData.category === null ? '' :
                <div style={{color: '#333', fontSize: '1rem'}}>
                  <SellOutlinedIcon/>
                  <span className={'ms-2'}>{formatDate(projectData.category)}</span>
                </div>
            }

        </div>

          <div style={{
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
                flexDirection: {xs: 'column', md: 'row'},
                flexWrap: 'wrap'
            }}>

            {
              projectData.prosImgs !== null || true ?
                <CarrouselImage projectImages={projectData.prosImgs}/>
                :
                ''
            }


            <CardInformation projectData={projectData}/>
          </div>

            <InformationProject projectData={projectData}/>
        </Box>
    );
};

export default Page;

