'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ResumeModal from "@/app/admin/resume/ResumeModal";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {getData} from "@/helper/getData";
import {category_end, resume_end} from "@/constants/endpoints";
import ResumeTable from "@/app/admin/resume/ResumeTable";
import {Button} from "@mui/material";
import CategoryModal from "@/app/admin/resume/category/CategoryModal";
import CategoryTable from "@/app/admin/resume/category/CategoryTable";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalCategory, setOpenModalCategory] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [resumeData, setResumeData] = React.useState([]);
  const [categoryData, setCategoryData] = React.useState([]);

  useEffect( () => {
    getData(resume_end, setResumeData)
    getData(category_end, setCategoryData)
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
    <Box sx={{marginTop: 2}}>

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
        <ModalForm modal={<ResumeModal handleClickOpen={handleClickOpen} action={'add'}
                                       handleRefreshTable={handleRefreshTable} categoryData={categoryData}/>}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      {openModalCategory &&
        <ModalForm modal={<CategoryModal handleClickOpen={handleClickOpenCategory} action={'add'}
                                         handleRefreshTable={handleRefreshTable}/>}
                   openModal={openModalCategory}
                   handleClickOpen={handleClickOpenCategory}
        />
      }
      <ResumeTable resumeData={resumeData} handleRefreshTable={handleRefreshTable} categoryData={categoryData}/>
      <h4 className={'mt-4'}>Categories</h4>
      <CategoryTable handleRefreshTable={handleRefreshTable} categoryData={categoryData}/>
    </Box>
  );
};

export default Page;
