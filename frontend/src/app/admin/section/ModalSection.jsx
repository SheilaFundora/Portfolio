import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {section_end} from "@/constants/endpoints";
import {handleSubmitData} from "@/helper/submitData";
import {handleEditData} from "@/helper/editData";

const ModalSection = ({handleClickOpen, action, sectionSelect = null, handleRefreshTable}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formSection');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSection= async (data) => {
    await handleSubmitData(handleClickOpen, section_end, data, handleRefreshTable, 'Section', setErrorMessage);
  }
  const handleEditSection = async (data) => {
    const endpoint = section_end + '/' + sectionSelect.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'Section');
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

export default ModalSection;
