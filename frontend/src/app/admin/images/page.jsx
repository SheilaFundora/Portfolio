'use client'
import React from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalImage from "@/app/admin/images/ModalImage";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import ModalForm from "@/components/adminComponents/other/ModalForm";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Image'} handleClickOpen={handleClickOpen}/>

      { openModal &&
        <ModalForm modal={<ModalImage handleClickOpen={handleClickOpen} action={'add'} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableAdmin />
    </Box>
  );
};

export default Page;
