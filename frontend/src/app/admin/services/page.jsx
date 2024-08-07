'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ServiceModal from "@/app/admin/services/ServiceModal";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import {services_end} from "@/constants/endpoints";
import {getData} from "@/helper/crud/getData";
import ServiceTable from "@/app/admin/services/ServiceTable";


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
        <ModalForm modal={<ServiceModal handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <ServiceTable serviceData={serviceData} handleRefreshTable={handleRefreshTable}  />
    </Box>
  );
};

export default Page;
