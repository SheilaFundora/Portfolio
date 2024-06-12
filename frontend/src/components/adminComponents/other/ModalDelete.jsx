import React from 'react';
import Box from "@mui/material/Box";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const ModalDelete = ({openDelete, handleOpenDelete, handleDelete, contentDelete}) => {
  return (
    <Box>
      <Dialog
        onClose={handleOpenDelete}
        aria-labelledby="customized-dialog-title"
        open={openDelete}
        className={'p-5'}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleOpenDelete}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent className='text-center'>
          <ErrorOutlineIcon sx={{ fontSize: 60 }} color="action"  />
          <h4 className='mt-4'>Are you sure to delete this {contentDelete} ?</h4>
          <p>This action can't be undone.</p>
        </DialogContent>

        <DialogActions sx={{ pb: 3, justifyContent: 'center'}} >
          <Button autoFocus onClick={handleOpenDelete} variant="contained" color='error'>
            Cancelar
          </Button> <br/>
          <Button onClick={handleDelete} variant="contained">
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModalDelete;
