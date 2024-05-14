'use client'
import React from 'react';
import TableAdmin from "@/components/adminCompoents/other/TableAdmin";
import Box from "@mui/material/Box";
import BtnModal from "@/components/adminCompoents/other/BtnModal";
import ModalSkill from "@/app/admin/skills/ModalSkill";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <BtnModal name={'skills'}
                modalAdd={<ModalSkill handleClickOpen={handleClickOpen}/>}
                openModal={openModal}
                handleClickOpen={handleClickOpen}
      />
      <TableAdmin />
    </Box>
  );
};

export default Page;
