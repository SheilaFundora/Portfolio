'use client'
import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Button, Grid} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalForm from "@/components/adminComponents/other/ModalForm";
import PersonModal from "@/app/admin/person/PersonModal";
import {user_end} from "@/constants/endpoints";
import axios from "axios";

const Page = () => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [personData, setPersonData] = React.useState([]);
  const [refreshData, setRefreshData] = React.useState(false)

  const handleRefreshData = () => {
    setRefreshData(!refreshData)
  }

  console.log(personData)
  useEffect( () => {
    getDataPerson()
  }, [refreshData])

  const getDataPerson = async () => {
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

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  }

  return (
    <Box >
      <Box sx={{paddingX: 5 , paddingY: 1}}>
        <Box sx={{paddingTop: {xs: 3, md: 0}}}>
          <h2 style={{color: '#545556', fontFamily: '"Playfair Display", serif'}}>
            Personal Information:
          </h2>
        </Box>

        {personData.map((person) => (
          <Grid container spacing={3} sx={{marginTop: {xs: 0, md: 1}}} key={person.id}>
            <Grid item xs={12} md={8} lg={6}>
              <p className={'text-style'}><b>Name:</b> {person.firstName}</p>
              <p className={'text-style'}><b>Last Name:</b> {person.lastName}</p>
              <p className={'text-style'}><b>Email:</b> {person.email}</p>
              <p className={'text-style'}><b>Phone:</b> {person.phone}</p>
              <p className={'text-style'}><b>Birthday: </b>
                { person.birthday === null ? '' :
                  person.birthday.split('T')[0]
                }
              </p>
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
              <p className={'text-style'}><b>Cv english:</b>  {person.cvPathEn !== null ? 'Exist' : 'Empty' }</p>
            <p className={'text-style'}>
              <b>Cv spanish: </b>
              {person.cvPathEs !== null || person.cvPathEs !== '' ? 'Empty' : 'Exist' }
            </p>
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
          <ModalForm modal={<PersonModal handleClickOpen={handleOpenEdit} action={'edit'} personData={personData[0]} handleRefreshData={handleRefreshData}/>}
                     openModal={openEdit}
                     handleClickOpen={handleOpenEdit}
          />
        }

      </Box>
    </Box>
  );
};

export default Page;
