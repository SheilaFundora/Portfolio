import React, {useEffect, useState} from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  FormControl, FormHelperText, Input,
  InputLabel,
  MenuItem, Select,
  TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/crud/submitData";
import {handleEditData} from "@/helper/crud/editData";
import {project_end, skill_end} from "@/constants/endpoints";
import {getData} from "@/helper/crud/getData";

const ProjectModal = ({handleClickOpen, handleRefreshTable, action, projectSelect}) => {
  const { register, setValue, control,  handleSubmit, formState: { errors } } = useForm('formProject');
  const [errorMessage, setErrorMessage] = useState('');
  const [skillData, setSkillData] = React.useState([]);

  useEffect( () => {
    getData(skill_end, setSkillData)

    if ( action === 'edit'){
      const skillIds = projectSelect.skills.map(skill => skill.id);
      setValue('skill_ids', skillIds);
    }

  }, [])


  const handleSubmitProject = async (data) => {
    data.dateProject = data.dateProject === '' ? null : data.dateProject;
    data.category = (data.category.charAt(0).toUpperCase() + data.category.slice(1).toLowerCase());
    await handleSubmitData(handleClickOpen, project_end, data, handleRefreshTable, 'project', setErrorMessage);
  }

  const handleEditProject = async (data) => {
    const endpoint = project_end + '/' + projectSelect.id +'/';
    data.dateProject = data.dateProject === '' ? null : data.dateProject;
    data.category = (data.category.charAt(0).toUpperCase() + data.category.slice(1).toLowerCase());

    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'project');
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
            defaultValue={action === 'edit' ? projectSelect.name : ""}
          />

          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Category"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("category" )}
              error={!!errors.category}
              helperText={errors.category && errors.category.message}
              defaultValue={action === 'edit' ? projectSelect.category : ""}
            />
            <TextField
              label="Client"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("client")}
              error={!!errors.client}
              helperText={errors.client && errors.client.message}
              defaultValue={action === 'edit' ? projectSelect.client : ""}
            />
          </div>
          <div className={'d-flex'}>
            <TextField
              type='date'
              sx={{m: 2, width: '700px'}}
              {...register("dateProject")}
              error={!!errors.dateProject}
              helperText={errors.dateProject && errors.dateProject.message}
              defaultValue= {  action === 'edit' ? ( projectSelect.dateProject === null ? '' :
                projectSelect.dateProject.split('T')[0] ) : ''
              }
            />
            <TextField
              label="Url"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("url", {
                required: 'Required field'
              })}
              error={!!errors.url}
              helperText={errors.url && errors.url.message}
              defaultValue={action === 'edit' ? projectSelect.url : ""}
            />
          </div>

          <FormControl  sx={{ width: '500px', marginX: 2 }}>
            <InputLabel>Skill</InputLabel>
            <Controller
              name="skill_ids"
              control={control}
              defaultValue={[]}
              rules={{ validate: (value) => value.length > 0 || 'You must select at least one skill' }}
              render={({ field }) => (
                <Select
                  {...field}
                  multiple
                  input={<Input />}
                  renderValue={(selected) => Array.isArray(selected) ? selected.join(', ') : ''}
                >
                  {skillData.map((skill) => (
                    <MenuItem key={skill.id} value={skill.id}>
                      {skill.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.skill_ids && <FormHelperText error>{errors.skill_ids.message}</FormHelperText>}
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
            defaultValue={action === 'edit' ? projectSelect.description : ""}
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
