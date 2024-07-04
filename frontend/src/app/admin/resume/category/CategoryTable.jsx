import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import Box from "@mui/material/Box";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import {category_end} from "@/constants/endpoints";
import {handleDelete} from "@/helper/deleteData";
import CategoryModal from "@/app/admin/resume/category/CategoryModal";

const CategoryTable = ({handleRefreshTable, categoryData}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [categorySelect, setCategorySelect] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(null);

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
                    setID={setCategoryId}
                    data={categoryData}
                    setDataSelect={setCategorySelect}
      />
    )
  }

  const handleDeleteCategory = async () => {
    const endpoint = category_end +'/'+ categoryId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'category');
  }
  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={categoryData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="name" header="Name" sortable filter style={{width: '25%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<CategoryModal handleClickOpen={handleOpenEdit} action={'edit'} categorySelect={categorySelect} handleRefreshTable={handleRefreshTable} />}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'category'}
                     handleDelete={handleDeleteCategory}
        />

      }

    </Box>
  );
};

export default CategoryTable;
