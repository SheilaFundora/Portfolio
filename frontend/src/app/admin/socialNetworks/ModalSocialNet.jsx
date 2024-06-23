import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {socialNet_end} from "@/constants/endpoints";
import {fetchData} from "@/helper/fetch";
import Swal from "sweetalert2";

const ModalSocialNet = ({handleClickOpen, action, social_net = null, handleRefreshTable}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formSN');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSn = async (data) => {
    const id = window.localStorage.getItem('id')
    data.user_id = id

    try{
      const resp = await fetchData(socialNet_end, data, "POST");

      if (resp.status === 500) {
        setErrorMessage("The social network already exist");
      }else{
        handleClickOpen();
        if (resp.status === 201) {
          handleRefreshTable();
          await Swal.fire('Exito', "Social Network created with exit.", 'success');
        }else{
          await Swal.fire('Error', "Error del servidor", 'error');
        }
      }
    }catch (e) {
      console.log(e);
    }
  }

  const handleEditSn = async (data) => {
    const endpoint = socialNet_end + '/' + social_net.id +'/'
    data.user_id = social_net.user_id

    try {
      const resp = await fetchData(endpoint, data, "PATCH");
      console.log(resp)
      handleClickOpen();
      if (resp.status === 200) {
        handleRefreshTable();
        await Swal.fire('Exito', "Social Network edit with exit.", 'success');
      }else{
        await Swal.fire('Error', "Error del servidor", 'error');
      }
    } catch (error) {
      console.error(error);
    }
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
              defaultValue={action === 'edit' ? social_net.name : ""}
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
              defaultValue={action === 'edit' ? social_net.link : ""}

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

export default ModalSocialNet;
