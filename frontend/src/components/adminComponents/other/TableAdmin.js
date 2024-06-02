import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const  personas = [
  {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 30,
    carnet: "123456789",
    telefono: "1234567890"
  },
  {
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
  {
    nombre: "Pedro",
    apellidos: "Martínez",
    edad: 35,
    carnet: "456789123",
    telefono: "4567891230"
  },
  {
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
  {
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
  {
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
];

const TableAdmin = () => {
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <IconButton size="large" className="text-warning" >
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton size="large" color="error" >
          <DeleteForeverIcon  fontSize="inherit" />
        </IconButton>
      </>
    )
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={personas || []}
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="nombre" header="Nombre" sortable filter style={{width: '25%'}}></Column>
        <Column field="apellidos" header="Apellidos" sortable filter style={{width: '25%'}}></Column>
        <Column field="edad" header="Edad" sortable filter style={{width: '25%'}}></Column>
        <Column field="carnet" header="Carnet" sortable filter style={{width: '25%'}}></Column>
        <Column field="telefono" header="Telefono" sortable style={{width: '25%'}}/>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem'}}/>
      </DataTable>
    </Box>
  );
};

export default TableAdmin;
