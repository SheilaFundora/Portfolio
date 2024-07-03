'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import SocialNetModal from "@/app/admin/socialNetworks/SocialNetModal";
import SocialNetTable from "@/app/admin/socialNetworks/SocialNetTable";
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
        <ModalForm modal={<SocialNetModal handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <SocialNetTable socialNetData={socialNetData} handleRefreshTable={handleRefreshTable} />
    </Box>
  );
};

export default Page;
