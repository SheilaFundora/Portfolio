'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import ModalSection from "@/app/admin/section/ModalSection";
import ButtonAdd from "@/components/adminComponents/other/ButtonAdd";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {section_end} from "@/constants/endpoints";
import SectionTable from "@/app/admin/section/SectionTable";
import {getData} from "@/helper/getData";

const Page = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refreshTable, setRefreshTable] = React.useState(false);
  const [sectionData, setSectionData] = React.useState([]);

  useEffect( () => {
    getData(section_end, setSectionData);

  }, [refreshTable])

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  }

  const handleRefreshTable = () => {
    setRefreshTable(!refreshTable)
  }


  return (
    <Box sx={{ marginTop: 2}}>
      <ButtonAdd name={'Section'} handleClickOpen={handleClickOpen}/>

      { openModal &&
        <ModalForm modal={<ModalSection handleClickOpen={handleClickOpen} action={'add'} handleRefreshTable={handleRefreshTable} />}
                   openModal={openModal}
                   handleClickOpen={handleClickOpen}
        />
      }
      <SectionTable handleRefreshTable={handleRefreshTable} sectionData={sectionData} />
    </Box>
  );
};

export default Page;
