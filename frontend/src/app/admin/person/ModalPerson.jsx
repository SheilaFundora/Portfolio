import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, MenuItem, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";

const ModalPerson = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitResume= async (data) => {
    console.log(data)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitResume)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to Edit Person</h4>

          <Box sx={{mt: 3}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <TextField
                label="Name"
                type='text'
                sx={{mb: 1, width: '35%'}}
                {...register("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName && errors.firstName.message}
              />
              <TextField
                label="Lastname"
                type='text'
                sx={{mb: 1, width: '55%'}}
                {...register("lastname")}
                error={!!errors.lastname}
                helperText={errors.lastname && errors.lastname.message}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <TextField
                helperText="Birthday"
                type='date'
                sx={{my: 2, width: '35%'}}
                {...register("birthday")}
                error={!!errors.birthday}
              />
              <TextField
                label="Phone"
                type='text'
                sx={{my: 2, width: '55%'}}
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
              />

            </Box>
            <Box>
              <TextField
                label="Address (city, country)"
                type='text'
                fullWidth
                {...register("address")}
                error={!!errors.address}
                helperText={errors.address && errors.address.message}
              />
              <TextField
                label="Email"
                type='email'
                fullWidth
                sx ={{ mt: 3}}
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />

            </Box>

            <Box sx={{ display: 'flex', mt:3,  justifyContent: 'space-between'}}>
              <TextField
                label="Profession"
                sx={{mb: 2, width: '65%'}}
                type="text"
                {...register("profession")}
                error={!!errors.profession}
                helperText={errors.profession && errors.profession.message}
              />
              <TextField
                label="Degree"
                type='text'
                sx={{mb: 2, width: '30%'}}
                {...register("degree")}
                error={!!errors.degree}
                helperText={errors.degree && errors.degree.message}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Controller
                name="remote"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    select
                    label="Remote"
                    {...field}
                    sx={{ my: 2, width: '30%' }}
                  >
                    <MenuItem value="true">Si</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                  </TextField>
                )}
              />

              <Controller
                name="freelancer"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    select
                    label="Freelancer"
                    {...field}
                    sx={{ my: 2, width: '30%' }}
                  >
                    <MenuItem value="true">Si</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                  </TextField>
                )}
              />
              <TextField
                label="Level"
                type='text'
                sx={{my: 2, width: '30%'}}
                {...register("level")}
                error={!!errors.level}
                helperText={errors.level && errors.level.message}
              />

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              {/* <TextField
                    type='file'
                    helperText='CV'
                    sx={{my: 1, width: '65%'}}
                    {...register("cv")}
                    error={!!errors.nombre}
                  />*/}
              <TextField
                label="Username"
                type='text'
                sx={{mb:1, width: '30%'}}
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username && errors.username.message}
              />
              <TextField
                label="Experience"
                type='number'
                sx={{my: 1, width: '30%'}}
                {...register("experience")}
                error={!!errors.experience}
                helperText={errors.experience && errors.experience.message}
              />
            </Box>



          </Box>

          {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}

          <DialogActions sx={{pb: 3, justifyContent: 'center'}}>
            <Button autoFocus onClick={handleClickOpen} variant="contained" color='error'>
              Cancelar
            </Button>
            <Button variant="contained" type="submit" className={'ms-4'}>
              Agregar
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Box>

  );
};

export default ModalPerson;
