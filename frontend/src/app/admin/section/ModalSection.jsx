import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

const ModalSection = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formSection');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSection= async (data) => {
    console.log(data)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitSection)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to add Section</h4>


          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Name"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("nombre", {
                required: 'Required field'
              })}
              error={!!errors.nombre}
              helperText={errors.nombre && errors.nombre.message}
            />
          </div>

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

export default ModalSection;
