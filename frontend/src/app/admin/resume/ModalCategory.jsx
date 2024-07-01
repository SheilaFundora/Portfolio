import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/submitData";
import {resume_end} from "@/constants/endpoints";
import {handleEditData} from "@/helper/editData";

const ModalCategory = ({handleClickOpen, handleRefreshTable, action}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitResumeCat= async (data) => {

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
              "Form to add Category for Resume" :
              "Form to edit Category for Resume"
            }
          </h4>

          <TextField
            label="Name"
            type='text'
            multiline
            rows={4}
            sx={{m: 2, width: '500px'}}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
            defaultValue={action === 'edit' ? resumeSelect.description : ""}
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

export default ModalCategory;
