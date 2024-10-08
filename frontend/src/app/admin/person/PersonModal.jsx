import React, {useEffect, useState} from 'react';
import {Button, DialogActions, DialogContent, MenuItem, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";
import {user_end} from "@/constants/endpoints";
import {handleEditData} from "@/helper/crud/editData";
import {convertViewUrl} from "@/helper/ViewPublicUrl";

const PersonModal = ({handleClickOpen, personData, handleRefreshData}) => {
  const { register, control, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect( () => {
    setValue('freelancer', personData.freelancer);
    setValue('remote', personData.remote);

  }, [])

  const handleEditPerson = async (data) => {
    const endpoint = user_end  + '/' + personData.id
    data.birthday = data.birthday === '' ? null : data.birthday;
    data.cvPathEs = convertViewUrl(data.cvPathEs)
    data.cvPathEn = convertViewUrl(data.cvPathEn)

    await handleEditData(handleClickOpen, endpoint, data, handleRefreshData, 'person');

  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleEditPerson)}>
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
                defaultValue={ personData.firstName }
              />
              <TextField
                label="Lastname"
                type='text'
                sx={{mb: 1, width: '55%'}}
                {...register("lastName")}
                error={!!errors.lastname}
                helperText={errors.lastname && errors.lastName.message}
                defaultValue={ personData.lastName }
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <TextField
                helperText="Birthday"
                type='date'
                sx={{my: 2, width: '35%'}}
                {...register("birthday")}
                error={!!errors.birthday}
                defaultValue= { personData.birthday === null ? '' :
                  personData.birthday.split('T')[0]
                }
              />
              <TextField
                label="Phone"
                type='text'
                sx={{my: 2, width: '55%'}}
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
                defaultValue={ personData.phone }
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
                defaultValue={ personData.address }
              />
              <TextField
                label="Email"
                type='email'
                fullWidth
                sx ={{ mt: 3}}
                {...register("email", {
                  required: 'Required field'
                })}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                defaultValue={ personData.email }
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
                defaultValue={ personData.profession }
              />
              <TextField
                label="Degree"
                type='text'
                sx={{mb: 2, width: '30%'}}
                {...register("degree")}
                error={!!errors.degree}
                helperText={errors.degree && errors.degree.message}
                defaultValue={ personData.degree }
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
                defaultValue={ personData.level }
              />

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <TextField
                label="Cv English"
                type='text'
                sx={{my: 1, width: '65%'}}
                {...register("cvPathEn")}
                error={!!errors.cvPathEn}
                helperText={errors.cvPathEn && errors.cvPathEn.message}
                defaultValue={ personData.cvPathEn }
              />
              <TextField
                label="Experience"
                type='number'
                sx={{my: 1, width: '30%'}}
                {...register("experience")}
                error={!!errors.experience}
                helperText={errors.experience && errors.experience.message}
                defaultValue={ personData.experience }
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <TextField
                label="Cv Spanish"
                type='text'
                sx={{my: 1, width: '65%'}}
                {...register("cvPathEs")}
                error={!!errors.cvPathEs}
                helperText={errors.cvPathEs && errors.cvPathEs.message}
                defaultValue={ personData.cvPathEs }
              />
              <TextField
                label="Username"
                type='text'
                disabled={true}
                sx={{mb:1, mt:1,  width: '30%'}}
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username && errors.username.message}
                defaultValue={ personData.username }
              />
            </Box>
          </Box>

          <DialogActions sx={{pb: 3, justifyContent: 'center'}}>
            <Button autoFocus onClick={handleClickOpen} variant="contained" color='error'>
              Cancel
            </Button>
            <Button variant="contained" type="submit" className={'ms-4'}>
              Accept
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Box>

  );
};

export default PersonModal;
