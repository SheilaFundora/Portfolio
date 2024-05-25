'use client'
import React from 'react';
import TableAdmin from "@/components/adminCompoents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalToAdd from "@/components/adminCompoents/other/modalToAdd";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import ModalSkill from "@/app/admin/skills/ModalSkill";
import ModalResume from "@/app/admin/resume/ModalResume";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ModalToAdd name={'resume'}
                  modalAdd={<ModalResume handleClickOpen={handleClickOpen}/>}
                  openModal={openModal}
                  handleClickOpen={handleClickOpen}
      />
      <TableAdmin />
    </Box>
  );
};

export default Page;
