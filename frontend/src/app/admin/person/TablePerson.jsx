import React, {useEffect} from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalResume from "@/app/admin/resume/ModalResume";
import ModalToAdd from "@/components/adminComponents/other/modalToAdd";
import ModalToEdit from "@/components/adminComponents/other/modalToEdit";
import ModalPerson from "@/app/admin/person/ModalPerson";
import {project_end, user_end} from "@/constants/endpoints";
import axios from "axios";
import ActionsTable from "@/components/adminComponents/other/actionsTable";

const personas = [
  {
    id: 1,
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 30,
    carnet: "123456789",
    telefono: "1234567890"
  },
  {
    id: 2,
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
  {
    id: 3,
    nombre: "Pedro",
    apellidos: "Martínez",
    edad: 35,
    carnet: "456789123",
    telefono: "4567891230"
  },
  {
    id: 4,
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
  {
    id: 5,
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
  {
    id: 6,
    nombre: "María",
    apellidos: "Gómez",
    edad: 25,
    carnet: "987654321",
    telefono: "0987654321"
  },
];


const TablePerson = () => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [personData, setPersonData] = React.useState([]);


  useEffect( () => {
    getData()
  }, [])

  const getData = async () => {
    const username = window.localStorage.getItem('username')

    try {
      await axios.get(
        process.env.NEXT_PUBLIC_API_HOST + user_end + '/' + username + '/'
      )
        .then(response => {
          setPersonData([response.data])
        })
    } catch (error) {
      console.log(error)
    }
  }

  console.log('personData', personData)


  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  }

  const confirmEditPerson = (idEdit) =>{
    const _person = personas.filter((val) => val.id === idEdit)
    handleOpenEdit();
    console.log(openEdit)
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <ActionsTable confirmEditPerson={confirmEditPerson} rowData={rowData}/>
    )
  }

  return (
    <Box sx={{marginTop: 4 }}>
      <DataTable value={personData || []}
                 paginator rows={5}
                 rowsPerPageOptions={[5, 10, 25, 50]}
                 tableStyle={{ minWidth: '50rem' }}
                 className="p-datatable-hgridlines"
      >
        <Column field="firstName" header="Name" sortable filter style={{width: '25%'}}></Column>
        <Column field="lastName" header="Last Name" sortable filter style={{width: '25%'}}></Column>
        <Column field="birthday" header="Birthday" sortable filter style={{width: '25%'}}></Column>
        <Column field="address" header="Address" sortable filter style={{width: '25%'}}></Column>
        <Column field="profession" header="Profession" sortable filter style={{width: '25%'}}></Column>
        <Column field="degree" header="Degree" sortable filter style={{width: '25%'}}></Column>
        <Column field="remote" header="Remote" sortable filter style={{width: '25%'}}></Column>
        <Column field="freelancer" header="Freelancer" sortable filter style={{width: '25%'}}></Column>
        <Column field="level" header="Level" sortable filter style={{width: '25%'}}></Column>
        <Column field="experience" header="Experience" sortable filter style={{width: '25%'}}></Column>
        <Column field="username" header="Username" sortable filter style={{width: '25%'}}></Column>
        <Column field="email" header="Email" sortable filter style={{width: '25%'}}></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '12rem'}}/>
      </DataTable>

      {openEdit &&
        <ModalToEdit modal={<ModalPerson handleClickOpen={handleOpenEdit}/>}
                    openModal={openEdit}
                    handleClickOpen={handleOpenEdit}
        />
      }

    </Box>
  );
};

export default TablePerson;
