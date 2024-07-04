import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {resume_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import {handleDelete} from "@/helper/deleteData";
import ResumeModal from "@/app/admin/resume/ResumeModal";
import {formatDate} from "@/helper/convertDate";


const ResumeTable = ({resumeData, handleRefreshTable, categoryData}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [resumeSelect, setResumeSelect] = React.useState([]);
  const [resumeId, setResumeId] = React.useState(null);

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
                    setID={setResumeId}
                    data={resumeData}
                    setDataSelect={setResumeSelect}
      />
    )
  }

  const handleDeleteResume = async () => {
    const endpoint = resume_end +'/'+ resumeId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'resume');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={resumeData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="category_id.name" header="Category" sortable filter style={{width: '25%'}}></Column>
        <Column field="titleImpt" header="Imp Title" sortable filter style={{width: '25%'}}></Column>
        <Column field="titleSecondary" header="Sec Title" sortable filter style={{width: '25%'}}></Column>
        <Column
          field="date_init"
          header="Date init"
          sortable
          filter
          style={{ width: '25%' }}
          body={(rowData) => formatDate(rowData.date_init)}
        ></Column>
        <Column
          field="date_end"
          header="Date End"
          sortable
          filter
          style={{ width: '25%' }}
          body={(rowData) => formatDate(rowData.date_end)}
        ></Column>
        <Column field="city" header="City" sortable filter style={{width: '25%'}}></Column>
        <Column field="country" header="Country" sortable filter style={{width: '25%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<ResumeModal handleClickOpen={handleOpenEdit} action={'edit'} resumeSelect={resumeSelect} handleRefreshTable={handleRefreshTable} categoryData={categoryData}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'resume'}
                     handleDelete={handleDeleteResume}
        />

      }

    </Box>
  );
};

export default ResumeTable;
