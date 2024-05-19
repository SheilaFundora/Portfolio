'use client'
import React from 'react';
import TableAdmin from "@/components/adminCompoents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalToAdd from "@/components/adminCompoents/other/modalToAdd";
import ModalSkill from "@/app/admin/skills/ModalSkill";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ModalToAdd name={'skills'}
                  modalAdd={<ModalSkill handleClickOpen={handleClickOpen}/>}
                  openModal={openModal}
                  handleClickOpen={handleClickOpen}
      />
      <TableAdmin />
    </Box>
  );
};

export default Page;
