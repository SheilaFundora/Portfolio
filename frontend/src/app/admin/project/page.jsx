'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ProjectModal from "@/app/admin/project/ProjectModal";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {Button} from "@mui/material";
import {getData} from "@/helper/getData";
import ProjectImgModal from "@/app/admin/project/projectImage/ProjectImgModal";
import ProjectTable from "@/app/admin/project/ProjectTable";
import ProjectImageTable from "@/app/admin/project/projectImage/ProjectImageTable";
import {imgProject_end, project_end} from "@/constants/endpoints";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalProjImg, setOpenModalProjImg] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [projectData, setProjectData] = React.useState([]);
  const [projectImageData, setProjectImageData] = React.useState([]);

  useEffect( () => {
    getData(project_end, setProjectData)
    getData(imgProject_end, setProjectImageData)

  }, [refreshTable])

  console.log(projectImageData)

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const handleClickOpenProjImg = () => {
    setOpenModalProjImg(!openModalProjImg);
  }

  const handleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  return (
    <Box sx={{ marginTop: 2}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Button variant="contained"
                  style={{bg: '#6366F1', color: 'white'}}
                  onClick={handleClickOpenProjImg}
          >+ Image</Button>
        </div>

        <div>
          <Button variant="contained"
                  style={{bg: '#6366F1', color: 'white'}}
                  onClick={handleClickOpen}
          >+ Project</Button>
        </div>

      </Box>

      { openModal &&
        <ModalForm modal={<ProjectModal handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      {openModalProjImg &&
        <ModalForm modal={<ProjectImgModal handleClickOpen={handleClickOpenProjImg} action={'add'}
                                           handleRefreshTable={handleRefreshTable} projectData={projectData}/>}
                   openModal={openModalProjImg}
                   handleClickOpen={handleClickOpenProjImg}
        />
      }
      <ProjectTable handleRefreshTable={handleRefreshTable} projectData={projectData}  />
      <h4 className={'mt-4'}>Categories</h4>
      <ProjectImageTable handleRefreshTable={handleRefreshTable} projectImageData={projectImageData} projectData={projectData}/>
    </Box>
  );
};

export default Page;
