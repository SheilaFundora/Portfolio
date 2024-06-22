import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {fetchData} from "@/helper/fetch";
import {services_end, socialNet_end} from "@/constants/endpoints";
import Swal from "sweetalert2";

const ModalService = ({handleClickOpen, action, hanleRefreshTable}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formService');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitService = async (data) => {
    const id = window.localStorage.getItem('id')
    data.user_id = id

    try{
      const resp = await fetchData(services_end, data, "POST");
      handleClickOpen();

      if (resp.status === 500) {
        Swal.fire('Error', "The social network already exist", 'error');
      }else{
        if (resp.status === 201) {
          hanleRefreshTable();
          await Swal.fire('Exito', "Social Network created with exit.", 'success');

        }else{
          await Swal.fire('Error', "Error del servidor", 'error');
        }
      }

    }catch (e) {
      console.log(e);
    }
  }

  const handleEditService = async (data) => {
    const endpoint = socialNet_end + '/' + social_net.id +'/'
    data.user_id = social_net.user_id

    /* try{
       const resp = await fetchData(endpoint, data, "PUT");
       console.log('id',social_net.link)
       console.log('data',data)
       console.log('resp', resp)
       handleClickOpen();
       hanleRefreshTable();


       if (resp.status === 500) {
         Swal.fire('Error', "The social network already exist", 'error');
       }else{
         if (resp.status === 201) {
           await Swal.fire('Exito', "Social Network created with exit.", 'success');
         }else{
           await Swal.fire('Error', "Error del servidor", 'error');
         } }catch (e) {
       console.log(e);
     }
       }*/

    try {
      const resp = await fetch(endpoint, {
        method: 'PATCH',
        body: data,
      });
      console.log(resp);

    } catch (error) {
      console.error(error);
    }
  }

  const handleOperationService= async (data) => {
    if( action === 'add'){
      handleSubmitSn(data)
    }else{
      if ( action === 'edit'){
        handleEditSn(data)
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
