import React from 'react';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

const ButtonAdd = ({name, handleClickOpen}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
      <Button variant="contained"
              style={{ bg: '#6366F1', color: 'white' }}
              onClick={handleClickOpen}
      >+ {name} </Button>
    </Box>
  );
};

export default ButtonAdd;
