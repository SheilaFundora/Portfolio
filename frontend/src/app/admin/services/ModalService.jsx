import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {services_end} from "@/constants/endpoints";
import {handleSubmitData} from "@/helper/submitData";
import {handleEditData} from "@/helper/editData";

const ModalService = ({handleClickOpen, action, handleRefreshTable, socialNet}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formService');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitService = async (data) => {
    await handleSubmitData(handleClickOpen, services_end, data, handleRefreshTable, 'Service', setErrorMessage);
  }

  const handleEditService = async (data) => {
    const endpoint = services_end + '/' + socialNet.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'Social Network');
  }

  const handleOperationService= async (data) => {
    if( action === 'add'){
      await handleSubmitService(data)
    }else{
      if ( action === 'edit'){
        await handleEditService(data)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationService)}>
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
              helperText={errors.title && errors.title.message}
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
