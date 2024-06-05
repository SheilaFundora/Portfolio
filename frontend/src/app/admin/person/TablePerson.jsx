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
import ModalForm from "@/components/adminComponents/other/modalForm";
import ModalPerson from "@/app/admin/person/ModalPerson";
import {project_end, user_end} from "@/constants/endpoints";
import axios from "axios";
import ActionsTable from "@/components/adminComponents/other/actionsTable";
import {Button, Grid} from "@mui/material";

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
    <Box sx={{paddingX: 5 , paddingY: 1}}>
      <Box sx={{paddingTop: {xs: 3, md: 0}}}>
        <h2 style={{color: '#545556', fontFamily: '"Playfair Display", serif'}}>
          Personal Information:
        </h2>
      </Box>

      {personData.map((person) => (
        <Grid container spacing={3} sx={{marginTop: {xs: 0, md: 1}}}>
          <Grid item xs={12} md={8} lg={6}>
            <p className={'text-style'}><b>Name:</b> {person.firstName}</p>
            <p className={'text-style'}><b>Last Name:</b> {person.lastName}</p>
            <p className={'text-style'}><b>Email:</b> {person.email}</p>
            <p className={'text-style'}><b>Phone:</b> {person.phone}</p>
            <p className={'text-style'}><b>Birthday:</b> {person.birthday}</p>
            <p className={'text-style'}><b>Address:</b> {person.address}</p>
            <p className={'text-style'}><b>Username:</b> {person.username}</p>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <p className={'text-style'}><b>Profession:</b> {person.profession}</p>
            <p className={'text-style'}><b>Degree:</b> {person.degree}</p>
            <p className={'text-style'}><b>Level:</b> {person.level}</p>
            <p className={'text-style'}><b>Experience:</b> {person.experience}</p>
            <p className={'text-style'}><b>Remote:</b> {(person.remote) ? 'Available' : 'Not available'}</p>
            <p className={'text-style'}><b>Freelancer:</b> {(person.freelancer) ? 'Available' : 'Not available'}</p>
            {/*<p className={'text-style'}><b>Cv english:</b> </p>
            <p className={'text-style'}><b>Cv spanish:</b> </p>*/}
          </Grid>
        </Grid>


      ))}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained"
                color="warning"
                onClick={handleOpenEdit}>

          <EditIcon fontSize="inherit" />
          <span className={'ms-1'}>Editar</span>
        </Button>
      </Box>


      {openEdit &&
        <ModalForm modal={<ModalPerson handleClickOpen={handleOpenEdit}/>}
                   openModal={openEdit}
                   handleClickOpen={handleOpenEdit}
        />
      }

    </Box>
  );
};

export default TablePerson;
