'use client'
import React, {useEffect} from 'react';
import TableAdmin from "@/components/adminComponents/other/TableAdmin";
import Box from "@mui/material/Box";
import ModalService from "@/app/admin/services/ModalService";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import {services_end} from "@/constants/endpoints";
import {getData} from "@/helper/getData";
import TableService from "@/app/admin/services/TableService";


const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [serviceData, setServiceData] = React.useState([]);


  useEffect( () => {
    getData(services_end, setServiceData)
  }, [refreshTable])


  const handleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };



  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Services'} handleClickOpen={handleClickOpen} />

      { openModal &&
        <ModalForm modal={<ModalService handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableService serviceData={serviceData} handleRefreshTable={handleRefreshTable}  />
    </Box>
  );
};

export default Page;
