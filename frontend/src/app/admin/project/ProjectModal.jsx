import React, {useEffect, useState} from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  FormControl, Input,
  InputLabel,
  MenuItem, Select,
  TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/submitData";
import {handleEditData} from "@/helper/editData";
import {project_end, skill_end} from "@/constants/endpoints";
import {getData} from "@/helper/getData";

const ProjectModal = ({handleClickOpen, handleRefreshTable, action, projectSelect}) => {
  const { register, control,  handleSubmit, formState: { errors } } = useForm('formProject');
  const [errorMessage, setErrorMessage] = useState('');
  const [skillData, setSkillData] = React.useState([]);

  useEffect( () => {
    getData(skill_end, setSkillData)
  }, [])


  const handleSubmitProject = async (data) => {
    console.log(data);

    await handleSubmitData(handleClickOpen, project_end, data, handleRefreshTable, 'Project', setErrorMessage);
  }

  const handleEditProject = async (data) => {
    const endpoint = project_end + '/' + projectSelect.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'Project');
  }

  const handleOperationProject= async (data) => {
    if( action === 'add'){
      await handleSubmitProject(data)
    }else{
      if ( action === 'edit'){
        await handleEditProject(data)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationProject)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Project" :
              "Form to edit Project"
            }
          </h4>
          <TextField
          label="Title"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("name", {
              required: 'Required field'
            })}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />

          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Category"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("category" )}
              error={!!errors.category}
              helperText={errors.category && errors.category.message}
            />
            <TextField
              label="Client"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("client")}
              error={!!errors.client}
              helperText={errors.client && errors.client.message}
            />
          </div>
          <div className={'d-flex'}>
            <TextField
              type='date'
              sx={{m: 2, width: '700px'}}
              {...register("Date")}
              error={!!errors.Date}
              helperText={errors.Date && errors.Date.message}
            />
            <TextField
              label="Url"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("url")}
              error={!!errors.url}
              helperText={errors.url && errors.url.message}
            />
          </div>

          <FormControl  sx={{ width: '500px', marginX: 2 }}>
            <InputLabel>Skill</InputLabel>
            <Controller
              name="skill_id"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  {...field}
                  multiple
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {skillData.map((skill) => (
                    <MenuItem key={skill.id} value={skill.id}>
                      {skill.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <TextField
            label="Description"
            type='text'
            multiline
            rows={4}
            sx={{m: 2, width: '500px'}}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
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

export default ProjectModal;
