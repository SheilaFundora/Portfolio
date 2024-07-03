'use client'
import React, {useEffect} from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ProjectModal from "@/app/admin/project/ProjectModal";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {Button} from "@mui/material";
import {getData} from "@/helper/getData";
import {project_end, resume_end} from "@/constants/endpoints";
import ProjectImgModal from "@/app/admin/project/ProjectImgModal";
import ProjectTable from "@/app/admin/project/ProjectTable";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalProjImg, setOpenModalProjImg] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [projectData, setProjectData] = React.useState([]);

  useEffect( () => {
    getData(project_end, setProjectData)
  }, [refreshTable])

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
                                           handleRefreshTable={handleRefreshTable}/>}
                   openModal={openModalProjImg}
                   handleClickOpen={handleClickOpenProjImg}
        />
      }
      <ProjectTable handleRefreshTable={handleRefreshTable} projectData={projectData}  />
    </Box>
  );
};

export default Page;
