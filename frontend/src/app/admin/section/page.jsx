'use client'
import React from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalToAdd from "@/components/adminComponents/other/modalToAdd";
import ModalSection from "@/app/admin/section/ModalSection";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ModalToAdd name={'section'}
                  modalAdd={<ModalSection handleClickOpen={handleClickOpen}/>}
                  openModal={openModal}
                  handleClickOpen={handleClickOpen}
      />
      <TableAdmin />
    </Box>
  );
};

export default Page;
