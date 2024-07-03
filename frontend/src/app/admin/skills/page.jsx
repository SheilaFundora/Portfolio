'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import SkillModal from "@/app/admin/skills/SkillModal";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {getData} from "@/helper/getData";
import {skill_end} from "@/constants/endpoints";
import SkillTable from "@/app/admin/skills/SkillTable";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [skillData, setSkillData] = React.useState([]);

  useEffect( () => {
    getData(skill_end, setSkillData)
  }, [refreshTable])

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const handleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  return (
    <Box sx={{ marginTop: 2}}>

      <ButtonAdd name={'Skills'} handleClickOpen={handleClickOpen}/>

      { openModal &&
        <ModalForm modal={<SkillModal handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <SkillTable skillData={skillData} handleRefreshTable={handleRefreshTable}  />
    </Box>
  );
};

export default Page;
