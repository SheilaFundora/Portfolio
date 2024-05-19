import React from 'react';
import Box from "@mui/material/Box";
import {Button, Dialog} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BtnModal = ({name, modalAdd, openModal, handleClickOpen, size='sm'}) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained"
                style={{ bg: '#6366F1', color: 'white' }}
                onClick={handleClickOpen}
        >+ {name} </Button>
      </Box>

      <Dialog
        open={openModal}
        onClose={handleClickOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={size} // Establece el tamaño máximo del modal, 'lg' es grande, 'md' es mediano, 'sm' es pequeño

      >
        <IconButton
          aria-label="close"
          onClick={handleClickOpen}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon/>
        </IconButton>

        {modalAdd }
      </Dialog>
    </Box>

  );
};

export default BtnModal;
