'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import TableSocialNet from "@/app/admin/socialNetworks/TableSocialNet";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import {socialNet_end} from "@/constants/endpoints";
import {getData} from "@/helper/getData";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [socialNetData, setSocialNetData] = React.useState([]);

  useEffect( () => {
    getData(socialNet_end, setSocialNetData)
  }, [refreshTable])

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const handleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Social Net'} handleClickOpen={handleClickOpen} />

      { openModal &&
        <ModalForm modal={<ModalSocialNet handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableSocialNet socialNetData={socialNetData} handleRefreshTable={handleRefreshTable} />
    </Box>
  );
};

export default Page;
