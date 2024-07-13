import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {services_end} from "@/constants/endpoints";
import {handleSubmitData} from "@/helper/submitData";
import {handleEditData} from "@/helper/editData";

const ServiceModal = ({handleClickOpen, action, handleRefreshTable, serviceSelect}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formService');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitService = async (data) => {
    await handleSubmitData(handleClickOpen, services_end, data, handleRefreshTable, 'service', setErrorMessage);
  }

  const handleEditService = async (data) => {
    const endpoint = services_end + '/' + serviceSelect.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'service');
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
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Service" :
              "Form to edit Servicr"
            }
          </h4>

          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Name"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("name", {
                required: 'Required field'
              })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              defaultValue={action === 'edit' ? serviceSelect.name : ""}
            />
            <TextField
              label="Icon"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("icon")}
              error={!!errors.icon}
              helperText={errors.icon && errors.icon.message}
              defaultValue={action === 'edit' ? serviceSelect.icon : ""}
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
            defaultValue={action === 'edit' ? serviceSelect.description : ""}
          />


          {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}

          <DialogActions sx={{pb: 3, justifyContent: 'center'}}>
            <Button autoFocus onClick={handleClickOpen} variant="contained" color='error'>
              Cancel
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

export default ServiceModal;
