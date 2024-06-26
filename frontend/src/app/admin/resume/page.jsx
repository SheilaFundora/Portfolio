'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ModalResume from "@/app/admin/resume/ModalResume";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {getData} from "@/helper/getData";
import {resume_end} from "@/constants/endpoints";
import ResumeTable from "@/app/admin/resume/ResumeTable";
import {Button} from "@mui/material";
import ModalCategory from "@/app/admin/resume/ModalCategory";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalCategory, setOpenModalCategory] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [resumeData, setResumeData] = React.useState([]);

  useEffect( () => {
    getData(resume_end, setResumeData)
  }, [refreshTable])

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const handleClickOpenCategory = () => {
    setOpenModalCategory(!openModalCategory);
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
                  onClick={handleClickOpenCategory}
          >+ Category</Button>
        </div>

        <div>
          <Button variant="contained"
                  style={{bg: '#6366F1', color: 'white'}}
                  onClick={handleClickOpen}
          >+ Resume</Button>
        </div>

      </Box>

      {openModal &&
        <ModalForm modal={<ModalResume handleClickOpen={handleClickOpen} action={'add'}
                                       handleRefreshTable={handleRefreshTable}/>}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      {openModalCategory &&
        <ModalForm modal={<ModalCategory handleClickOpen={handleClickOpenCategory} action={'add'}
                                       handleRefreshTable={handleRefreshTable}/>}
                   openModal={openModalCategory}
                   handleClickOpen={handleClickOpenCategory}
        />
      }
      <ResumeTable resumeData={resumeData} handleRefreshTable={handleRefreshTable} />
    </Box>
  );
};

export default Page;
