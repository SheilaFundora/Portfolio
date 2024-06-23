import React from 'react';
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ActionsTable = ({rowData = 0, handleOpenEdit, handleOpenDelete, setID, setDataSelect, data }) => {
  const confirmEdit = (idEdit) =>{
    const dataFilter = data.filter((val) => val.id === idEdit)
    setDataSelect(dataFilter[0])
    handleOpenEdit();
  }

  const confirmDelete = (idEdit) =>{
    setID(idEdit)
    handleOpenDelete();
  }

  return (
    <div>
      <IconButton size="large" className="text-warning" onClick={() => confirmEdit(rowData.id)}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <IconButton size="large" color="error" onClick={() => confirmDelete(rowData.id)} >
        <DeleteForeverIcon  fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default ActionsTable;
