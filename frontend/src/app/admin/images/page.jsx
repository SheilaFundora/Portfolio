'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ModalImage from "@/app/admin/images/ModalImage";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {getData} from "@/helper/getData";
import {images_end} from "@/constants/endpoints";
import ImageTable from "@/app/admin/images/ImageTable";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [imagesData, setImagesData] = React.useState([]);

  useEffect( () => {
    getData(images_end, setImagesData)
  }, [refreshTable])

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const handleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }

  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Image'} handleClickOpen={handleClickOpen}/>

      { openModal &&
        <ModalForm modal={<ModalImage handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <ImageTable imagesData={imagesData} handleRefreshTable={handleRefreshTable} />
    </Box>
  );
};

export default Page;
