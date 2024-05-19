import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

const ModalResume = ({handleClickOpen}) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitResume= async (data) => {
    console.log(data)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitResume)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>Form to add Resume</h4>

          <div className={'d-flex'}>
            <TextField
              label="Section Name "
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("nameSection")}
              error={!!errors.sectionName}
              helperText={errors.sectionName && errors.sectionName.message}
            />
            <TextField
              label="Link"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("link")}
              error={!!errors.link}
              helperText={errors.link && errors.link.message}
            />
          </div>

          <div className={'d-flex'}>
            <TextField
              label="Title Important"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("titleImportant")}
              error={!!errors.titleImportant}
              helperText={errors.titleImportant && errors.titleImportant.message}
            />

          </div>

          <TextField
            label="Title Secondary"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("titleSecondary")}
            error={!!errors.titleSecondary}
            helperText={errors.titleSecondary && errors.titleSecondary.message}
          />


          <div className={'d-flex'}>
            <TextField
              type='date'
              sx={{m: 2, width: '700px'}}
              {...register("dateinit")}
              error={!!errors.dateinit}
              helperText={errors.dateinit && errors.dateinit.message}
            />
            <TextField
              type='date'
              sx={{m: 2, width: '700px'}}
              {...register("dateEnd")}
              error={!!errors.dateEnd}
              helperText={errors.dateEnd && errors.dateEnd.message}
            />
          </div>


          <div className={'d-flex'}>
            <TextField
              label="City"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("city")}
              error={!!errors.city}
              helperText={errors.city && errors.city.message}
            />
            <TextField
              label="Country"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("country")}
              error={!!errors.country}
              helperText={errors.country && errors.country.message}
            />
          </div>
          <TextField
            label="Subtitle"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("subtitle")}
            error={!!errors.subtitle}
            helperText={errors.subtitle && errors.subtitle.message}
          />
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

export default ModalResume;
