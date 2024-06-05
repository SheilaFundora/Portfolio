'use client'
import React from 'react';
import Box from "@mui/material/Box";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import TableSocialNet from "@/app/admin/socialNetworks/TableSocialNet";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Social Net'} handleClickOpen={handleClickOpen}/>

      { openModal &&
        <ModalForm modal={<ModalSocialNet handleClickOpen={handleClickOpen} action={'add'} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableSocialNet />
    </Box>
  );
};

export default Page;
