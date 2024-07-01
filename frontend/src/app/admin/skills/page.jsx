'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ModalSkill from "@/app/admin/skills/ModalSkill";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {getData} from "@/helper/getData";
import {skill_end} from "@/constants/endpoints";
import TableSkill from "@/app/admin/skills/TableSkill";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [skillData, setSkillNetData] = React.useState([]);

  useEffect( () => {
    getData(skill_end, setSkillNetData)
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
        <ModalForm modal={<ModalSkill handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableSkill skillData={skillData} handleRefreshTable={handleRefreshTable}  />
    </Box>
  );
};

export default Page;
