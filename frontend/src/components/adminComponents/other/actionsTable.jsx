import React from 'react';
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ActionsTable = ({confirmEditPerson,rowData=1 }) => {
  return (
    <div>
      <IconButton size="large" className="text-warning" onClick={() => confirmEditPerson(rowData.id)}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <IconButton size="large" color="error" >
        <DeleteForeverIcon  fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default ActionsTable;
