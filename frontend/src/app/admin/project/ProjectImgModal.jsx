import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {
  Button,
  DialogActions,
  DialogContent,
  FormControl, FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/submitData";
import {imgProject_end} from "@/constants/endpoints";
import {handleEditData} from "@/helper/editData";

const ProjectImgModal = ({handleClickOpen, handleRefreshTable, action, projectData=null, projectImageSelect=null}) => {
  const { register,setValue, control, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect( () => {
    if ( action === 'edit'){
      setValue('project_id', projectImageSelect.project_id.name);
    }

  }, [])

  const handleSubmitProjectImg = async (data) => {
    await handleSubmitData(handleClickOpen, imgProject_end, data, handleRefreshTable, 'Category', setErrorMessage);
  }

  const handleEditResumeProjectImg = async (data) => {
    const endpoint = imgProject_end + '/' + projectImageSelect.id +'/';
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'Project');
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
            sx={{m: 2, width: '500px'}}
            {...register("imgs")}
            error={!!errors.imgs}
            helperText={errors.imgs && errors.imgs.message}
            defaultValue={action === 'edit' ? projectImageSelect.imgs : ""}
          />

          <FormControl  sx={{ width: '500px', marginX: 2 , marginTop: 2}}>
            <InputLabel>Project Title</InputLabel>
            <Controller
              name="project_id"
              control={control}
              defaultValue=''
              rules={{ validate: (value) => value !== '' || 'You must select a project' }}

              render={({ field }) => (
                <Select
                  {...field}
                  input={<Input />}
                  renderValue={(selected) => selected || ''}                >
                  {projectData.map((project) => (
                    <MenuItem key={project.id} value={project.id}>
                      {project.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.project_id && <FormHelperText error>{errors.project_id.message}</FormHelperText>}
          </FormControl>

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
