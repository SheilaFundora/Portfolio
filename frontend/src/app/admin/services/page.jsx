'use client'
import React, {useEffect} from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalService from "@/app/admin/services/ModalService";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";


const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false)

  useEffect( () => {
    getData()
  }, [refreshTable])

  const getData = async () => {
    const username = window.localStorage.getItem('username')
  }

  const hanleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };



  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Services'} handleClickOpen={handleClickOpen} />

      { openModal &&
        <ModalForm modal={<ModalService handleClickOpen={handleClickOpen} action={'add'} hanleRefreshTable={hanleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableAdmin />
    </Box>
  );
};

export default Page;
