'use client'
import React from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalService from "@/app/admin/services/ModalService";
import ModalForm from "@/components/adminComponents/other/ModalForm";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      { openModal &&
        <ModalForm modal={<ModalService handleClickOpen={handleClickOpen} action={'add'} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableAdmin />
    </Box>
  );
};

export default Page;
