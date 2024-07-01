import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {services_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import {handleDelete} from "@/helper/deleteData";
import ModalService from "@/app/admin/services/ModalService";


const TableService = ({serviceData, handleRefreshTable}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [serviceSelect, setServiceSelect] = React.useState([]);
  const [serviceId, setServiceId] = React.useState(null);


  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  }

  const handleOpenDelete= () => {
    setOpenDelete(!openDelete);
  }

  const actionBodyTemplate = (rowData) => {
    return(
      <ActionsTable rowData={rowData}
                    handleOpenEdit={handleOpenEdit}
                    handleOpenDelete={handleOpenDelete}
                    setID={setServiceId}
                    data={serviceData}
                    setDataSelect={setServiceSelect}
      />
    )
  }

  const handleDeleteService = async () => {
    const endpoint = services_end +'/'+ serviceId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , ' social network');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={serviceData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="name" header="Name" sortable filter style={{width: '30%'}}></Column>
        <Column field="description" header="Description" sortable filter style={{width: '30%'}}></Column>
        <Column field="icon" header="Icon" sortable filter style={{width: '30%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<ModalService handleClickOpen={handleOpenEdit} action={'edit'} serviceSelect={serviceSelect} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'Service'}
                     handleDelete={handleDeleteService}
        />

      }

    </Box>
  );
};

export default TableService;
