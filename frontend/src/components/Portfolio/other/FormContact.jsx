import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Snackbar, TextField} from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {Alert} from "@mui/lab";

const FormContact = () => {
    const [state, handleSubmit] = useForm("xkndvaao");
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        email: "",
        asunto: "",
        message: ""
    });

    React.useEffect(() => {
        if (state.succeeded) {
            setOpen(true);
            setFormData({
                email: "",
                asunto: "",
                message: ""
            });
        }
    }, [state.succeeded]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <Box sx={{
            flex: '1 1 calc(33% - 80px)',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: '100%',
        }}>
            <form onSubmit={handleSubmit}>
                <div className={'mx-auto text-center mt-3 w-100'}>
                    <TextField
                        label="Correo"
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        size="small"
                        sx={{
                            width: '350px',
                            borderRadius: '8px',
                            marginTop: '10px',
                            '@media (max-width:600px)': {
                                width: '100%',
                            }
                        }}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <div className={'mx-auto text-center mt-3 w-100'}>
                    <TextField
                        label="Asunto"
                        type='text'
                        size="small"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        sx={{
                            width: '350px',
                            padding: 0,
                            borderRadius: '8px',
                            marginTop: '10px',
                            '@media (max-width:600px)': {
                                width: '100%',
                            }
                        }}
                    />
                    <ValidationError
                        prefix="Asunto"
                        field="asunto"
                        errors={state.errors}
                    />
                </div>

                <div className={'mx-auto text-center mt-3 w-100'}>
                    <TextField
                        label="Mensaje"
                        type='text'
                        required
                        id="message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        sx={{
                            width: '350px',
                            padding: 0,
                            borderRadius: '8px',
                            marginTop: '10px',
                            '@media (max-width:600px)': {
                                width: '100%',
                            },
                        }}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div className={'mx-auto text-center mt-3'}>
                    <Button type="submit" variant="contained" style={{
                        backgroundColor: '#05097c',
                        color: 'white'
                    }} disabled={state.submitting} >Enviar mensaje</Button>
                </div>
                <Snackbar open={open}
                          autoHideDuration={6000}
                          onClose={handleClose}
                          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                          style={{ margin: 'auto' }}
                >
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        "El correo se ha enviado con éxito, muchas gracias!!"
                    </Alert>
                </Snackbar>
            </form>
        </Box>
    );
};

export default FormContact;
