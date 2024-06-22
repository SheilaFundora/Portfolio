import React, {useEffect} from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ModalSocialNet from "@/app/admin/socialNetworks/ModalSocialNet";
import axios from "axios";
import {socialNet_end, user_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import Swal from "sweetalert2";


const TableSocialNet = ({socialNetData, hanleRefreshTable}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [snSelect, setSnSelect] = React.useState([]);
  const [snId, setSId] = React.useState(null);


  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  }

  const handleOpenDelete= () => {
    setOpenDelete(!openDelete);
  }

  const confirmEditSN = (idEdit) =>{
    const _sn = socialNetData.filter((val) => val.id === idEdit)
    setSnSelect(_sn[0])
    handleOpenEdit();
  }

  const confirmDeleteSN = (idEdit) =>{
    setSId(idEdit)
    handleOpenDelete();
  }


  const actionBodyTemplate = (rowData) => {
    return(
      <ActionsTable confirmEdit={confirmEditSN} rowData={rowData} confirmDelete={confirmDeleteSN} />
    )
  }

  const handleDeleteSN = async () => {
    const endpoint = socialNet_end +'/'+ snId + '/';
    try{
      const resp = await axios.delete(process.env.NEXT_PUBLIC_API_HOST + endpoint)
      handleOpenDelete();

      if (resp.status === 500) {
        Swal.fire('Error', "Server error", 'error');
      }else{
        if (resp.status === 200) {
          hanleRefreshTable();
          await Swal.fire('Exito', "Social Network deleted with exit.", 'success');

        }else{
          await Swal.fire('Error', "Server Error", 'error');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={socialNetData || []}
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
        <ModalForm modal={<ModalSocialNet handleClickOpen={handleOpenEdit} action={'edit'} social_net={snSelect} />}
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

export default TableSocialNet;
