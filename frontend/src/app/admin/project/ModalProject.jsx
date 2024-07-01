import React, {useState} from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl, Input,
  InputLabel,
  MenuItem, Select,
  TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";

const tech = [
  { id: 1, name: 'Python' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'React' },
  { id: 4, name: 'Angular' },
  { id: 5, name: 'Vue.js' },
  { id: 6, name: 'Node.js' },
  { id: 7, name: 'Django' },
  { id: 8, name: 'Flask' },
  { id: 9, name: 'TensorFlow' },
  { id: 10, name: 'PyTorch' },
  { id: 11, name: 'Unity' },
  { id: 12, name: 'Docker' },
  { id: 13, name: 'Kubernetes' },
  { id: 14, name: 'Git' },
  { id: 15, name: 'MySQL' },
  { id: 16, name: 'MongoDB' },
  { id: 17, name: 'PostgreSQL' },
  { id: 18, name: 'Redis' },
  // Puedes seguir agregando más tecnologías
];

const ModalProject = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formProject');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitProject= async (data) => {
    console.log(errors)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitProject)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to add Projects</h4>
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
              {...register("category" , {
                required: 'Required field'
              })}
              error={!!errors.nombre}
              helperText={errors.nombre && errors.nombre.message}
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
              {...register("dateProject")}
              error={!!errors.dateProject}
              helperText={errors.dateProject && errors.dateProject.message}
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
            <InputLabel>Tech</InputLabel>
            <Controller
              name="tech"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  {...field}
                  multiple
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {tech.map((tech) => (
                    <MenuItem key={tech.id} value={tech.id}>
                      {tech.name}
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

export default ModalProject;
