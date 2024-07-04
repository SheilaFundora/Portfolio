import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/submitData";
import {project_end} from "@/constants/endpoints";

const CategoryModal = ({handleClickOpen, handleRefreshTable, action}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitResumeCat= async (data) => {
    await handleSubmitData(handleClickOpen, project_end, data, handleRefreshTable, 'Project', setErrorMessage);

  }

  const handleEditResumeCat = async (data) => {
  }

  const handleOperationResumeCat= async (data) => {
    if( action === 'add'){
      await handleSubmitResumeCat(data)
    }else{
      if ( action === 'edit'){
        await handleEditResumeCat(data)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationResumeCat)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Category" :
              "Form to edit Category"
            }
          </h4>

          <TextField
            label="Name"
            type='text'
            sx={{m: 2, width: '300px'}}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
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

export default CategoryModal;
