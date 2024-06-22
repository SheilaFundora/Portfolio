'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import TableSocialNet from "@/app/admin/socialNetworks/TableSocialNet";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import axios from "axios";
import {socialNet_end} from "@/constants/endpoints";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false)
  const [socialNetData, setSocialNetData] = React.useState([]);

  useEffect( () => {
    getData()
  }, [refreshTable])

  const getData = async () => {
    const username = window.localStorage.getItem('username')

    try {
      await axios.get(
        process.env.NEXT_PUBLIC_API_HOST + socialNet_end /*+ '/user/' + username + '/'*/
      )
        .then(response => {
          console.log(response.data)
          setSocialNetData(response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const hanleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Social Net'} handleClickOpen={handleClickOpen} />

      { openModal &&
        <ModalForm modal={<ModalSocialNet handleClickOpen={handleClickOpen} action={'add'} hanleRefreshTable={hanleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <TableSocialNet socialNetData={socialNetData} hanleRefreshTable={hanleRefreshTable} />
    </Box>
  );
};

export default Page;
