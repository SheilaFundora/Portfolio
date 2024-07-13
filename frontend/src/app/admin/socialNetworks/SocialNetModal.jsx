import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {socialNet_end} from "@/constants/endpoints";
import {handleSubmitData} from "@/helper/submitData";
import {handleEditData} from "@/helper/editData";

const SocialNetModal = ({handleClickOpen, action, snSelect = null, handleRefreshTable}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSn = async (data) => {
    await handleSubmitData(handleClickOpen, socialNet_end, data, handleRefreshTable, 'social network', setErrorMessage);
  }

  const handleEditSn = async (data) => {
    const endpoint = socialNet_end + '/' + snSelect.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'social network');
  }

  const handleOperationSN= async (data) => {
    if( action === 'add'){
      await handleSubmitSn(data)
    }else{
      if ( action === 'edit'){
        await handleEditSn(data)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationSN)}>
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
              sx={{ m: 2, width: '500px' }}
              {...register("name", {
                required: 'Required field'
              })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              defaultValue={action === 'edit' ? snSelect.name : ""}
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
              defaultValue={action === 'edit' ? snSelect.link : ""}

            />
          </div>

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

export default SocialNetModal;
