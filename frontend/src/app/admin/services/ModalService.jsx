import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

const ModalService = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formService');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitService= async (data) => {
    console.log( data);
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitService)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to add Service</h4>


          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Title"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("title", {
                required: 'Required field'
              })}
              error={!!errors.title}
              helperText={errors.title && errors.tttle.message}
            />
            <TextField
              label="Icon"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("icon", {
                required: 'Required field'
              })}
              error={!!errors.icon}
              helperText={errors.icon && errors.icon.message}
            />
          </div>

          <TextField
            label="Description"
            type='text'
            required
            multiline
            rows={4}
            sx={{m: 2, width: '520px'}}
            {...register("description", {
              required: 'Required field'
            })}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />


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

export default ModalService;
