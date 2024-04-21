import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

const ModalSkill = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formSkill');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSkills= async (data) => {
    console.log(data)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitSkills)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to add Skill</h4>
          <TextField
            label="Name"
            type='text'
            sx={{m: 2, width: '245px'}}
            {...register("name", {
              required: 'Required field'
            })}
            error={!!errors.name}
            helperText={errors.nombre && errors.name.message}
          />
          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Percent"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("percent")}
              error={!!errors.nombre}
              helperText={errors.nombre && errors.nombre.message}
            />

            <TextField
              type='file'
              sx={{m: 2, width: '250px'}}
              {...register("icon")}
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

export default ModalSkill;
