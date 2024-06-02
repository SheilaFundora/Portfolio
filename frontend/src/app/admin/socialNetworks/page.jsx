'use client'
import React from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalToAdd from "@/components/adminComponents/other/modalToAdd";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import TableSocialNet from "@/app/admin/socialNetworks/TableSocialNet";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ModalToAdd name={'social net'}
                  modalAdd={<ModalSocialNet handleClickOpen={handleClickOpen}/>}
                  openModal={openModal}
                  handleClickOpen={handleClickOpen}
      />
      <TableSocialNet />
    </Box>
  );
};

export default Page;
