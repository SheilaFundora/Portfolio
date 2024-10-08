import React from 'react';
import {Button, DialogActions, DialogContent, ListItemButton, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const DownloadModal = ({handleClickOpen, user}) => {

  const handleDownloadEn = () => {
    const pdfUrl = user.cvPathEn; // URL de descarga directa desde Google Drive
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.click();
  };

  const handleDownloadEs = () => {
    const pdfUrl = user.cvPathEs; // URL de descarga directa desde Google Drive
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.click();
  };

  return (
    <Box>
        <DialogContent>
          <h4 className='mt-4 text-center'>Download Curriculum Vitae ( CV )</h4>

          <Box sx={{ pb: 3,
            display: 'flex',
            alignItems: 'center',
            mx:{
              xs: 'auto',
              md: 5,
            },
            justifyContent: {
              xs: 'center',
              md: 'space-between'
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}>
            <Box>
              <button className={'dow-cv'} onClick={handleDownloadEn}>
                <ListItemButton>
                  <ArrowCircleDownIcon/>
                  <ListItemText sx={{marginLeft: '10px'}}> <b>CV English</b> </ListItemText>
                </ListItemButton>
              </button>
            </Box>

            <Box  sx={{ ml: { xs: 0, md: 4 } }}>
              <button className={'dow-cv'} onClick={handleDownloadEs}>
                <ListItemButton>
                  <ArrowCircleDownIcon/>
                  <ListItemText sx={{marginLeft: '10px'}}> <b>CV Spanish</b> </ListItemText>
                </ListItemButton>
              </button>

            </Box>
          </Box>

          <DialogActions sx={{pb: 3, justifyContent: 'center'}}>
            <Button autoFocus onClick={handleClickOpen} variant="contained" color='error'>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
    </Box>
  );
};

export default DownloadModal;
