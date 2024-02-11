'use client'
import React from 'react';
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    IconButton, ListItemIcon,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";


const MyMenuModal = ({ open, onClose, pages, pathname }) => {
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
                    padding: '5px'
                },
            }}
        >
            <Box sx={{ marginLeft: 'auto', padding: '5px'}}>
                <IconButton color="inherit" onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </Box>

            <List sx={{ display: 'flex', flexDirection: 'column' }}>
                {pages.map((page) => (
                    <ListItem key={page.name}>
                        <Link
                            href={page.link}
                            underline="none"
                            className={`link-sidebar ${pathname === page.link ? 'active' : ''}`}
                            onClick={onClose}
                        >

                            <ListItemText>
                                                <span style={{ fontSize: '17px',fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                                                }}>{page.name}</span>
                            </ListItemText>
                        </Link>
                    </ListItem>

                ))}
            </List>

            <Box sx={{ marginLeft: '18px', display: {xs: 'flex', md: 'none'} }}>
                <Link href={'/admin'}
                      underline="none"
                      className={`link-sidebar ${pathname === '/admin' ? 'active' : ''}`}
                >
                    <ListItemText>
                        <span style={{ fontSize: '17px',fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Administración</span>
                    </ListItemText>
                </Link>
            </Box>
        </Dialog>
    );
};

export default MyMenuModal;