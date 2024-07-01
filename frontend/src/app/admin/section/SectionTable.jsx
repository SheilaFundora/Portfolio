import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {section_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import {handleDelete} from "@/helper/deleteData";
import ModalSection from "@/app/admin/section/ModalSection";


const SectionTable = ({sectionData, handleRefreshTable}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [sectionSelect, setSectionSelect] = React.useState([]);
  const [sectionId, setSectionId] = React.useState(null);

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
                    setID={setSectionId}
                    data={sectionData}
                    setDataSelect={setSectionSelect}
      />
    )
  }

  const handleDeleteSection = async () => {
    const endpoint = section_end +'/'+ sectionId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'section');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={sectionData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="title" header="Title" sortable filter style={{width: '30%'}}></Column>
        <Column field="description" header="Description" sortable filter style={{width: '35%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{width: '35%', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<ModalSection handleClickOpen={handleOpenEdit} action={'edit'} sectionSelect={sectionSelect} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'Section'}
                     handleDelete={handleDeleteSection}
        />

      }

    </Box>
  );
};

export default SectionTable;
