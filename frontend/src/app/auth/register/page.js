'use client'
import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, makeStyles, Step, StepLabel, Stepper, TextField} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

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
            <div className={'d-flex w-100 align-items-center justify-content-between'}>
              {activeStep === 0 && (
                <Box>
                  <TextField
                    label="Name"
                    type='text'
                    sx={{m: 2, width: '400px'}}
                    {...register("name", {
                      required: 'Required field'
                    })}
                    error={!!errors.name}
                    helperText={errors.name && errors.name.message}
                  />

                  <TextField
                    label="Link"
                    type='text'
                    sx={{m: 2, width: '400px'}}
                    {...register("link", {
                      required: 'Required field'
                    })}
                    error={!!errors.link}
                    helperText={errors.link && errors.link.message}
                  />
                </Box>
              )}

              {activeStep === 1 && (
                <Box>
                  <TextField
                    label="Name"
                    type='text'
                    sx={{m: 2, width: '400px'}}
                    {...register("name", {
                      required: 'Required field'
                    })}
                    error={!!errors.name}
                    helperText={errors.name && errors.name.message}
                  />
                </Box>
              )}

              {activeStep === 2 && (
                <Box>
                  <TextField
                    label="SDg"
                    type='text'
                    sx={{m: 2, width: '400px'}}
                    {...register("name", {
                      required: 'Required field'
                    })}
                    error={!!errors.name}
                    helperText={errors.name && errors.name.message}
                  />
                </Box>
              )}

            </div>


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
