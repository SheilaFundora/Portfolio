'use client'
import React, {useEffect, useState} from 'react';
import {
  Button,
  DialogContent, MenuItem, Stack,
  Step,
  StepLabel,
  Stepper,
  TextField
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";
import Typography from "@mui/material/Typography";
import {fetchData} from "@/helper/fetch";
import {register_end} from "@/constants/endpoints";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import Link from "@mui/material/Link";
import {routesAuth} from "@/constants/apiRoutesAuth";

const steps = [
  'Paso 1: Información personal',
  'Paso 2: Dirección de envío',
  'Paso 3: Método de pago',
  'Paso 4: Cargando ',
];

const Page = () => {
  const { register, control, handleSubmit } = useForm('formSN');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmitPerson = async (data) => {

    console.log('data', data)
    if( data.username === ''){
      setErrorMessage('The username is required')

    }else if (data.password === ''){
      setErrorMessage('The password is required')

    }else if (data.email === ''){
      setErrorMessage('The email is required')

    }else if (!/\S+@\S+\.\S+/.test(data.email)) {
      setErrorMessage('Invalid email format');
    }
    else if(data.password !== data.password2){
      setErrorMessage('Passwords must match')

    }else {
      setErrorMessage('')
      delete data.password2;

      try {
        const resp = await fetchData(register_end, data, "POST");

        if (resp.status === 400) {
          Swal.fire('Error', "The user already exist", 'error');
        }else{
          if (resp.status === 201) {
            router.push('/auth/login')
            await Swal.fire('Exito', "You have successfully registered. Please login", 'success');
          }else{
            await Swal.fire('Error', "Error del servidor", 'error');
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <Box sx={{ mt: 1, mb:2}}>

      <Box sx={{ marginLeft: 2 }}>
        <Stack
          spacing={1}
          sx={{ mb: 3 }}
        >
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            Register
          </Typography>

          <Typography
            color="text.secondary"
            variant="body2"
          >
            I already have an account
            <Link href={routesAuth[1].link} underline="none" sx={{fontSize: '14px', color: 'var(--blue-port)', marginLeft: 1}}>
              Login now
            </Link>

          </Typography>
        </Stack>
      </Box>

      <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>

      <Button autoFocus onClick={handleBack} disabled={activeStep === 0}  sx={{ marginTop: 2}} >
        <ArrowBackIcon/>
      </Button>


      <Box sx={{mb: 2}}>
        <form onSubmit={handleSubmit(handleSubmitPerson)}>
          <DialogContent>
            {activeStep === 0 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    label="Name"
                    type='text'
                    sx={{mb: 1, width: '35%'}}
                    {...register("firstName")}
                  />

                  <TextField
                    label="Lastname"
                    type='text'
                    sx={{mb: 1, width: '55%'}}
                    {...register("lastname")}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    helperText="Birthday"
                    type='date'
                    sx={{my: 2, width: '35%'}}
                    {...register("birthday")}
                  />
                  <TextField
                    label="Phone"
                    type='text'
                    sx={{my: 2, width: '55%'}}
                    {...register("phone")}
                  />

                </Box>
                <TextField
                  label="Address (city, country)"
                  type='text'
                  fullWidth
                  {...register("address")}
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    label="Profession"
                    sx={{mb: 2, width: '65%'}}
                    type="text"
                    {...register("profession")}
                  />
                  <TextField
                    label="Degree"
                    type='text'
                    sx={{mb: 2, width: '30%'}}
                    {...register("degree")}
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
                  />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <Box sx={{ width: '65%'}}>
                  {/*  <Controller
                      name="cvPathEs"
                      control={control}
                      render={({ field }) => (
                        <input type="file" onChange={(e) => field.onChange(e.target.files[0])} />
                      )}
                    />*/}
                    {/*<Controller
                      name="cvPathEn"
                      control={control}
                      render={({ field }) => (
                        <input type="file" onChange={(e) => field.onChange(e.target.files[0])} />
                      )}
                    />*/}
                  </Box>
                  <Box sx={{width: '30%'}} >
                    <TextField
                      label="Experience"
                      type='number'
                      sx={{my: 1, width: '100%'}}
                      {...register("experience")}
                    />
                  </Box>



                </Box>

              </Box>
            )}

            {activeStep === 2 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    label="Username"
                    type='text'
                    required
                    sx={{mb:1, width: '35%'}}
                    {...register("username")}
                    autoComplete="current-username"
                  />
                  <TextField
                    label="Email"
                    type='email'
                    required
                    sx={{width: '55%'}}
                    {...register("email")}
                  />
                </Box>
                <TextField
                  label="Password"
                  fullWidth
                  type="password"
                  required
                  autoComplete="current-password"
                  sx={{my: 2}}
                  {...register("password")}
                />

                <TextField
                  label="Confirm Password"
                  autoComplete="current-password"
                  name="password"
                  fullWidth
                  type="password"
                  required
                  sx={{my: 1}}
                  {...register("password2", {
                    required: 'Required field'
                  })}
                />
              </Box>
            )}

            {activeStep === 3 && (
              <Box sx={{ mx: 'auto', mt: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                  Information completed, register now
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: '50%' }}
                  >
                    Register
                  </Button>
                </Box>

              </Box>
            )}


            {errorMessage && <div className='error-message text-danger text-start mt-3'>{errorMessage}</div>}

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              {activeStep !== 3 ?
                <Button
                  onClick={handleNext}
                  variant="contained"
                  type={activeStep === 2 ? "submit" : "button"}
                  sx={{ width: '50%' }}
                >
                  Continue
                </Button>
               :
                ''
              }
            </Box>

          </DialogContent>
        </form>
      </Box>




    </Box>
  );
};

export default Page;
