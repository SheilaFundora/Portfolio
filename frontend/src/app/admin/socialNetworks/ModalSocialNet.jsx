import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

const ModalSocialNet = ({handleClickOpen, action='add'}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formSN');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSN= async (data) => {
    console.log(data)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitSN)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            { action === 'add' ?
              "Form to add Social Network" :
              "Form to edit Social Network"
            }
          </h4>


          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Name"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("name", {
                required: 'Required field'
              })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
            />

            <TextField
              label="Link"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("link", {
                required: 'Required field'
              })}
              error={!!errors.link}
              helperText={errors.link && errors.link.message}
            />
          </div>



          {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}

          <DialogActions sx={{pb: 3, justifyContent: 'center'}}>
            <Button autoFocus onClick={handleClickOpen} variant="contained" color='error'>
              Cancel
            </Button>
            <Button variant="contained" type="submit" className={'ms-4'}>
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Box>

  );
};

export default ModalSocialNet;
