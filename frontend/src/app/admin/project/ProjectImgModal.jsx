import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

const ProjectImgModal = ({handleClickOpen, handleRefreshTable, action}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitProjectImg = async (data) => {

  }

  const handleEditResumeProjectImg = async (data) => {
  }

  const handleOperationProjectImg = async (data) => {
    if( action === 'add'){
      await handleSubmitProjectImg(data)
    }else{
      if ( action === 'edit'){
        await handleEditResumeProjectImg(data)
      }
    }
  }
  return (

    <Box>
      <form onSubmit={handleSubmit(handleOperationProjectImg)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Image for Project" :
              "Form to edit Image for Project"
            }
          </h4>

          <TextField
            label="Url"
            type='text'
            multiline
            rows={4}
            sx={{m: 2, width: '500px'}}
            {...register("imgs")}
            error={!!errors.imgs}
            helperText={errors.imgs && errors.imgs.message}
/*
            defaultValue={action === 'edit' ? resumeSelect.description : ""}
*/
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

export default ProjectImgModal;
