'use client'
import React from 'react';
import TableAdmin from "@/components/adminCompoents/other/TableAdmin";
import Box from "@mui/material/Box";
import BtnModal from "@/components/adminCompoents/other/BtnModal";
import ModalPerson from "@/app/admin/person/ModalPerson";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import ModalSkill from "@/app/admin/skills/ModalSkill";
import ModalResume from "@/app/admin/resume/ModalResume";
import ModalImage from "@/app/admin/images/ModalImage";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <BtnModal name={'image'}
                modalAdd={<ModalImage handleClickOpen={handleClickOpen}/>}
                openModal={openModal}
                handleClickOpen={handleClickOpen}
      />
      <TableAdmin />
    </Box>
  );
};

export default Page;