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
          <TextField
            label="Title"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("title", {
              required: 'Required field'
            })}
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
          />
          <TextField
            label="Description"
            type='text'
            required
            multiline
            rows={4}
            sx={{m: 2, width: '500px'}}
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

export default ModalSection;
