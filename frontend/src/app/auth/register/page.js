'use client'
import React, {useState} from 'react';
import {
  Button,
  DialogContent, MenuItem,
  Step,
  StepLabel,
  Stepper,
  TextField
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";

const steps = [
  'Paso 1: Información personal',
  'Paso 2: Dirección de envío',
  'Paso 3: Método de pago',
];

const Page = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formSN');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeStep, setActiveStep] = useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmitPerson = async (data) => {
    // Aquí puedes enviar formData a tu servidor o hacer lo que necesites con los datos
    console.log(data);
  };

  return (
    <Box sx={{ mt: 1, mb:2}}>
      <Button autoFocus onClick={handleBack} disabled={activeStep === 0}  >
        <ArrowBackIcon/>
      </Button>

      <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{mt: 5}}>
        <form onSubmit={handleSubmit(handleSubmitPerson)}>
          <DialogContent>
            {activeStep === 0 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    label="Name"
                    type='text'
                    sx={{mb: 1, width: '35%'}}
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name && errors.name.message}
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
                <TextField
                  label="Address (city, country)"
                  type='text'
                  fullWidth
                  {...register("address")}
                  error={!!errors.address}
                  helperText={errors.address && errors.address.message}
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    label="Profesion"
                    name="profesion"
                    sx={{mb: 2, width: '65%'}}
                    type="text"
                    {...register("profesion")}
                    error={!!errors.profesion}
                    helperText={errors.profesion && errors.profesion.message}
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
                        required
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
                    name="frelancer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        select
                        required
                        label="Frelancer"
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
                  <TextField
                    type='file'
                    helperText='CV'
                    sx={{my: 1, width: '30%'}}
                    {...register("cv", {
                      required: 'Required field'
                    })}
                    error={!!errors.nombre}
                  />
                  <TextField
                    label="Experience"
                    type='number'
                    sx={{my: 1, width: '30%'}}
                    {...register("experience")}
                    error={!!errors.experience}
                    helperText={errors.experience && errors.experience.message}
                  />
                  <Controller
                    name="Job type Available"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        select
                        required
                        label="Job Available"
                        {...field}
                        sx={{ my: 1, width: '30%' }}
                      >
                        <MenuItem value="true">Part time</MenuItem>
                        <MenuItem value="false">Full time</MenuItem>
                        <MenuItem value="false">Hibrido</MenuItem>
                        <MenuItem value="false">Contract</MenuItem>
                      </TextField>
                    )}
                  />
                </Box>

              </Box>
            )}

            {activeStep === 2 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <TextField
                    label="Username"
                    type='text'
                    sx={{mb:1, width: '35%'}}
                    {...register("username")}
                    error={!!errors.username}
                    helperText={errors.username && errors.username.message}
                  />
                  <TextField
                    label="Email"
                    type='email'
                    sx={{width: '55%'}}
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email && errors.email.message}
                  />
                </Box>
                  <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    sx={{my: 2}}
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password && errors.password.message}
                  />

                  <TextField
                    label="Repit Password"
                    name="password"
                    fullWidth
                    type="password"
                    sx={{my: 1}}
                    {...register("password2")}
                    error={!!errors.password2}
                    helperText={errors.password2 && errors.password2.message}
                  />
              </Box>
            )}

            {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}

            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
              <Button
                onClick={activeStep === 2 ? handleSubmit : handleNext}
                variant="contained"
                type="submit"
                  sx={{width: '50%'}}
                >
                  {activeStep === 2 ? 'Registrarse' : 'Continuar'}
                </Button>
              </Box>
          </DialogContent>
        </form>
      </Box>




    </Box>
  );
};

export default Page;
