import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import {images_end} from "@/constants/endpoints";
import ActionsTable from "@/components/adminComponents/other/ActionsTable";
import ModalDelete from "@/components/adminComponents/other/ModalDelete";
import {handleDelete} from "@/helper/crud/deleteData";
import ImageModal from "@/app/admin/images/ImageModal";


const ImageTable = ({imagesData, handleRefreshTable}) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [imageSelect, setImageSelect] = React.useState([]);
  const [imageId, setImageId] = React.useState(null);

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
                    setID={setImageId}
                    data={imagesData}
                    setDataSelect={setImageSelect}
      />
    )
  }

  const handleDeleteSN = async () => {
    const endpoint = images_end +'/'+ imageId + '/';
    await handleDelete(handleOpenDelete, endpoint, handleRefreshTable , 'Images');
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={imagesData }
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="section" header="Section" sortable filter style={{width: '30%'}}></Column>
        <Column field="imgs" header="Links" sortable filter style={{width: '35%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{width: '35%', paddingLeft: '40px'}}/>
      </DataTable>

      {openEdit &&
        <ModalForm modal={<ImageModal handleClickOpen={handleOpenEdit} action={'edit'} imageSelect={imageSelect} handleRefreshTable={handleRefreshTable}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

      {openDelete &&
        <ModalDelete openDelete={openDelete}
                     handleOpenDelete={handleOpenDelete}
                     contentDelete={'Image'}
                     handleDelete={handleDeleteSN}
        />

      }

    </Box>
  );
};

export default ImageTable;
