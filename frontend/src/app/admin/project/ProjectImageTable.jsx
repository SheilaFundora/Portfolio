import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import Box from "@mui/material/Box";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import {imgProject_end} from "@/constants/endpoints";
import {handleDelete} from "@/helper/deleteData";
import ProjectImgModal from "@/app/admin/project/ProjectImgModal";

const ProjectImageTable = ({handleRefreshTable, projectImageData, projectData}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [projectImageSelect, setProjectImageSelect] = React.useState([]);
  const [projectImageId, setProjectImageId] = React.useState(null);

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
                    setID={setProjectImageId}
                    data={projectImageData}
                    setDataSelect={setProjectImageSelect}
      />
    )
  }

  const handleDeleteProjectImage = async () => {
    const endpoint = imgProject_end +'/'+ projectImageId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'project');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={projectImageData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="imgs" header="URL" sortable filter style={{width: '20%'}}></Column>
        <Column field="project_id.name" header="Project" sortable filter style={{width: '20%'}}></Column>
      <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem', paddingLeft: '40px'}}/>

      </DataTable>
        {openEdit &&
        <ModalForm modal={<ProjectImgModal handleClickOpen={handleOpenEdit} action={'edit'} projectImageSelect={projectImageSelect} handleRefreshTable={handleRefreshTable} projectData={projectData}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'image project'}
                     handleDelete={handleDeleteProjectImage}
        />

      }

    </Box>
  );
};

export default ProjectImageTable;
