import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {skill_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import {handleDelete} from "@/helper/crud/deleteData";
import SkillModal from "@/app/admin/skills/SkillModal";


const SkillTable = ({skillData, handleRefreshTable}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [skillSelect, setSkillSelect] = React.useState([]);
  const [skillId, setSkillId] = React.useState(null);

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
                    setID={setSkillId}
                    data={skillData}
                    setDataSelect={setSkillSelect}
      />
    )
  }

  const handleDeleteSkill = async () => {
    const endpoint = skill_end +'/'+ skillId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'skill');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={skillData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="name" header="Nombre" sortable filter style={{width: '25%'}}></Column>
        <Column field="porcent" header="Percent" sortable filter style={{width: '25%'}}></Column>
        <Column field="group" header="Group" sortable filter style={{width: '25%'}}></Column>
        <Column field="icon" header="Icon" sortable filter style={{width: '25%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<SkillModal handleClickOpen={handleOpenEdit} action={'edit'} skillSelect={skillSelect} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'skill'}
                     handleDelete={handleDeleteSkill}
        />

      }

    </Box>
  );
};

export default SkillTable;
