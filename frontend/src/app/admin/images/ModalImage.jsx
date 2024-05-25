import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

const ModalImage = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formImage');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitImage= async (data) => {
    console.log(data)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitImage)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to add Image</h4>
          <div className='d-flex '>
            <TextField
              label="Name section"
              type='text'
              sx={{m: 2, width: '300px'}}
              {...register("section", {
                required: 'Required field'
              })}
              error={!!errors.section}
              helperText={errors.section && errors.section.message}
            />
            <TextField
              type='file'
              sx={{m: 2, width: '300px'}}
              {...register("icon", {
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

export default ModalImage;
