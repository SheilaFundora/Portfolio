import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/crud/submitData";
import {images_end} from "@/constants/endpoints";
import {handleEditData} from "@/helper/crud/editData";
import {convertViewUrl} from "@/helper/ViewPublicUrl";

const ImageModal = ({handleClickOpen, action, handleRefreshTable, imageSelect}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formImage');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitService = async (data) => {
    data.imgs = convertViewUrl(data.imgs)
    await handleSubmitData(handleClickOpen, images_end, data, handleRefreshTable, 'image', setErrorMessage);
  }

  const handleEditService = async (data) => {
    const endpoint = images_end + '/' + imageSelect.id +'/';
    data.imgs = convertViewUrl(data.imgs)

    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'image');
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
              "Form to add Image" :
              "Form to edit Image"
            }
          </h4>
          <div className='d-flex '>
            <TextField
              label="Name section"
              type='text'
              sx={{m: 2, width: '300px'}}
              {...register("section", {
                required: 'Required field'
              })}
              error={!!errors.section}
              helperText={errors.section && errors.section.message}
              defaultValue={action === 'edit' ? imageSelect.section : ""}
            />
            <TextField
              label="Img url"
              type='text'
              sx={{m: 2, width: '300px'}}
              {...register("imgs", {
                required: 'Required field'
              })}
              error={!!errors.imgs}
              helperText={errors.imgs && errors.imgs.message}
              defaultValue={action === 'edit' ? imageSelect.imgs : ""}
            />
          </div>

          {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}
          <div className='error-message text-secondary text-start ms-4'>
            You must have a img with section header, me, logo.
          </div>

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

export default ImageModal;
