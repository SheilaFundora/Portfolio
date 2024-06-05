'use client'
import React from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalResume from "@/app/admin/resume/ModalResume";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import ModalForm from "@/components/adminComponents/other/ModalForm";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Resume'} handleClickOpen={handleClickOpen}/>

      { openModal &&
        <ModalForm modal={<ModalResume handleClickOpen={handleClickOpen} action={'add'} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableAdmin />
    </Box>
  );
};

export default Page;
