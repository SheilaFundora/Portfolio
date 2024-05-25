import React from 'react';
import Box from "@mui/material/Box";
import {Button, Dialog} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ModalToEdit = ({ modal, openModal, handleClickOpen, size='sm'}) => {
  return (
    <Box>
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

        {modal }
      </Dialog>
    </Box>

  );
};

export default ModalToEdit;
