import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, DialogActions, DialogContent, MenuItem, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";

const ModalChangePass = ({handleClickOpen}) => {
  const { register, control, handleSubmit } = useForm('formSN');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePass = () => {

  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleChangePass)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to Change Password</h4>

          <Box sx={{mt: 3}}>
            <TextField
              label="Old Password"
              fullWidth
              type="password"
              required
              autoComplete="current-password"
              sx={{my: 2}}
              {...register("password")}
            />
            <TextField
              label=" New Password"
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

          {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}

          <DialogActions sx={{pb: 3, justifyContent: 'center'}}>
            <Button autoFocus onClick={handleClickOpen} variant="contained" color='error'>
              Cancelar
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

export default ModalChangePass;
