import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {handleSubmitData} from "@/helper/submitData";
import {resume_end} from "@/constants/endpoints";
import {handleEditData} from "@/helper/editData";

const ResumeModal = ({handleClickOpen, handleRefreshTable, action, resumeSelect = null }) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formResume');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitResume= async (data) => {
    if(data.date_init > data.date_end  ){
      setErrorMessage('Error in dates')
    }else{
      data.date_init = data.date_init === '' ? null : data.date_init;
      data.date_end = data.date_end === '' ? null : data.date_end;

      await handleSubmitData(handleClickOpen, resume_end, data, handleRefreshTable, 'Resume', setErrorMessage);
    }
  }

  const handleEditResume = async (data) => {
    const endpoint = resume_end + '/' + resumeSelect.id +'/'
    if(data.date_init > data.date_end  ){
      setErrorMessage('Error in dates')
    }else{
      data.date_init = data.date_init === '' ? null : data.date_init;
      data.date_end = data.date_end === '' ? null : data.date_end;

      await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'Resume');
    }
  }

  const handleOperationResume= async (data) => {
    if( action === 'add'){
      await handleSubmitResume(data)
    }else{
      if ( action === 'edit'){
        await handleEditResume(data)
      }
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationResume)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Resume" :
              "Form to edit Resume"
            }
          </h4>
          <div className={'d-flex'}>
            <TextField
              label="Important Title"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("titleImpt",{
                required: 'Required field'
              })}
              error={!!errors.titleImpt}
              helperText={errors.titleImpt && errors.titleImpt.message}
              defaultValue={action === 'edit' ? resumeSelect.titleImpt : ""}
            />

          </div>

          <div className={'d-flex'}>
            <TextField
              label="Important Title"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("titleImpt",{
                required: 'Required field'
              })}
              error={!!errors.titleImpt}
              helperText={errors.titleImpt && errors.titleImpt.message}
              defaultValue={action === 'edit' ? resumeSelect.titleImpt : ""}
            />

            <TextField
              label="Link"
              type='text'
              sx={{m: 2, width: '500px'}}
              {...register("link")}
              error={!!errors.link}
              helperText={errors.link && errors.link.message}
              defaultValue={action === 'edit' ? resumeSelect.link : ""}
            />

          </div>

          <TextField
            label="Title Secondary"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("titleSecondary")}
            error={!!errors.titleSecondary}
            helperText={errors.titleSecondary && errors.titleSecondary.message}
            defaultValue={action === 'edit' ? resumeSelect.titleSecondary : ""}
          />


          <div className={'d-flex'}>
            <TextField
              type='date'
              sx={{m: 2, width: '700px'}}
              {...register("date_init")}
              error={!!errors.date_init}
              helperText={errors.date_init && errors.date_init.message}
              defaultValue= {  action === 'edit' ? ( resumeSelect.date_init === null ? '' :
                resumeSelect.date_init.split('T')[0] ) : ''
              }
            />
            <TextField
              type='date'
              sx={{m: 2, width: '700px'}}
              {...register("date_end")}
              error={!!errors.date_end}
              helperText={errors.date_end && errors.date_end.message}
              defaultValue= {action === 'edit' ? ( resumeSelect.date_end === null ? '' :
                resumeSelect.date_end.split('T')[0]) : ''
              }
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
              defaultValue={action === 'edit' ? resumeSelect.city : ""}
            />
            <TextField
              label="Country"
              type='text'
              sx={{m: 2, width: '700px'}}
              {...register("country")}
              error={!!errors.country}
              helperText={errors.country && errors.country.message}
              defaultValue={action === 'edit' ? resumeSelect.country : ""}
            />
          </div>
          <TextField
            label="Subtitle"
            type='text'
            sx={{m: 2, width: '500px'}}
            {...register("subtitle")}
            error={!!errors.subtitle}
            helperText={errors.subtitle && errors.subtitle.message}
            defaultValue={action === 'edit' ? resumeSelect.subtitle : ""}
          />
          <TextField
            label="Description"
            type='text'
            multiline
            rows={4}
            sx={{m: 2, width: '500px'}}
            {...register("description",{
              required: 'Required field'
            })}
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

export default ResumeModal;
