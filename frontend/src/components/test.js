'use client'
import React from 'react';
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";


const MyMenuModal = ({ open, onClose, pages }) => {
    return (
        <Dialog
            fullWidth
            maxWidth="lg"
            open={open}
            onClose={onClose}
            PaperProps={{
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            <Box sx={{ marginLeft: 'auto' }}>
                <IconButton color="inherit" onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {pages.map((page) => (
                    <ListItem button key={page.name} onClick={onClose}>
                        <ListItemText primary={page.name} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};

export default MyMenuModal;