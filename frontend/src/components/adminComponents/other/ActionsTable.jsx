import React from 'react';
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ActionsTable = ({confirmEdit,rowData = 0, confirmDelete}) => {
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
