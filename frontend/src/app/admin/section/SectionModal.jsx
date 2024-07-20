import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {section_end} from "@/constants/endpoints";
import {handleSubmitData} from "@/helper/crud/submitData";
import {handleEditData} from "@/helper/crud/editData";

const SectionModal = ({handleClickOpen, action, sectionSelect = null, handleRefreshTable}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formSection');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSection= async (data) => {
    await handleSubmitData(handleClickOpen, section_end, data, handleRefreshTable, 'section', setErrorMessage);
  }
  const handleEditSection = async (data) => {
    const endpoint = section_end + '/' + sectionSelect.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'section');
  }

  const handleOperationSection= async (data) => {
    if( action === 'add'){
      await handleSubmitSection(data)
    }else{
      if ( action === 'edit'){
        await handleEditSection(data)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationSection)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Section" :
              "Form to edit Section"
            }
          </h4>

          <TextField
            label="Title"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("title", {
              required: 'Required field'
            })}
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
            defaultValue={action === 'edit' ? sectionSelect.title : ""}
          />
          <TextField
            label="Description"
            type='text'
            multiline
            rows={4}
            sx={{m: 2, width: '500px'}}
            {...register("description", {
              required: 'Required field'
            })}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
            defaultValue={action === 'edit' ? sectionSelect.description : ""}
          />

          {errorMessage && <div className='error-message text-danger text-start ms-4'>{errorMessage}</div>}

          <div className='error-message text-secondary text-start ms-4'>
            You must have a section titled About and Footer.
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

export default SectionModal;
