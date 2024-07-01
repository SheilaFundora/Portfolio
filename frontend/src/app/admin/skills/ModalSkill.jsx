import React, {useState} from 'react';
import {Button, DialogActions, DialogContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {skill_end} from "@/constants/endpoints";
import {handleEditData} from "@/helper/editData";
import {handleSubmitData} from "@/helper/submitData";

const ModalSkill = ({handleClickOpen, handleRefreshTable, action, skillSelect = null}) => {
  const { register, handleSubmit, formState: { errors } } = useForm('formSkill');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSkills= async (data) => {
    await handleSubmitData(handleClickOpen, skill_end, data, handleRefreshTable, 'Skill', setErrorMessage);
  }

  const handleEditSkill = async (data) => {
    const endpoint = skill_end + '/' + skillSelect.id +'/'
    await handleEditData(handleClickOpen, endpoint, data, handleRefreshTable, 'Skill');
  }

  const handleOperationSkill= async (data) => {
    if( action === 'add'){
      await handleSubmitSkills(data)
    }else{
      if ( action === 'edit'){
        await handleEditSkill(data)
      }
    }
  }


  return (
    <Box>
      <form onSubmit={handleSubmit(handleOperationSkill)}>
        <DialogContent>
          <h4 className='mt-4 text-center'>
            {action === 'add' ?
              "Form to add Skill" :
              "Form to edit Skill"
            }
          </h4>
          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Name"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("name", {
                required: 'Required field'
              })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              defaultValue={action === 'edit' ? skillSelect.name : ""}
            />
            <TextField
              label="Group"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("group")}
              error={!!errors.group}
              helperText={errors.group && errors.group.message}
              defaultValue={action === 'edit' ? skillSelect.group : ""}
            />
          </div>

          <div className={'d-flex w-100 align-items-center justify-content-between'}>
            <TextField
              label="Percent"
              type='number'
              sx={{m: 2, width: '250px'}}
              {...register("porcent")}
              error={!!errors.porcent}
              helperText={errors.porcent && errors.porcent.message}
              defaultValue={action === 'edit' ? skillSelect.porcent : ""}
            />

            <TextField
              label="Icon"
              type='text'
              sx={{m: 2, width: '250px'}}
              {...register("icon")}
              error={!!errors.icon}
              helperText={errors.icon && errors.icon.message}
              defaultValue={action === 'edit' ? skillSelect.icon : ""}
            />
          </div>

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

export default ModalSkill;
