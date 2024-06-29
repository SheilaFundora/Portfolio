import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import {socialNet_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import {handleDelete} from "@/helper/deleteData";


const TableService = ({socialNetData, handleRefreshTable}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [snSelect, setSnSelect] = React.useState([]);
  const [serviceId, setServiceId] = React.useState(null);


  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  }

  const handleOpenDelete= () => {
    setOpenDelete(!openDelete);
  }

  const confirmEditSN = (idEdit) =>{
    const _service = socialNetData.filter((val) => val.id === idEdit)
    setSnSelect(_service[0])
    handleOpenEdit();
  }

  const confirmDeleteService = (idEdit) =>{
    setServiceId(idEdit)
    handleOpenDelete();
  }


  const actionBodyTemplate = (rowData) => {
    return(
      <ActionsTable confirmEdit={confirmEditSN} rowData={rowData} confirmDelete={confirmDeleteSN} />
    )
  }

  const handleDeleteSN = async () => {
    const endpoint = socialNet_end +'/'+ snId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , ' social network');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={socialNetData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="name" header="Nombre" sortable filter style={{width: '30%'}}></Column>
        <Column field="link" header="Link" sortable filter style={{width: '35%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{width: '35%', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<ModalSocialNet handleClickOpen={handleOpenEdit} action={'edit'} socialNet={snSelect} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'social network'}
                     handleDelete={handleDeleteSN}
        />

      }

    </Box>
  );
};

export default TableService;
