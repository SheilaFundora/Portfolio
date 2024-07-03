import React from 'react';
import Box from "@mui/material/Box";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import SocialNetModal from "@/app/admin/socialNetworks/SocialNetModal";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import {project_end} from "@/constants/endpoints";
import {handleDelete} from "@/helper/deleteData";
import ProjectModal from "@/app/admin/project/ProjectModal";

const ProjectTable = ({handleRefreshTable, projectData}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [projectSelect, setProjectSelect] = React.useState([]);
  const [projectId, setProjectId] = React.useState(null);

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
                    setID={setProjectId}
                    data={projectData}
                    setDataSelect={setProjectSelect}
      />
    )
  }

  const handleDeletePrject = async () => {
    const endpoint = project_end +'/'+ projectId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'project');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={projectData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="name" header="Title" sortable filter style={{width: '30%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{width: '35%', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<ProjectModal handleClickOpen={handleOpenEdit} action={'edit'} projectSelect={projectSelect} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'project'}
                     handleDelete={handleDeletePrject}
        />

      }

    </Box>
  );
};

export default ProjectTable;
