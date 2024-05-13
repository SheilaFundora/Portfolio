'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {routesAuth} from "@/constants/apiRoutesAuth";
import {Stack} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            © {new Date().getFullYear()} <span  style={{color: '#05097c'}}>Sheila</span>. Todos los derechos reservados.
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const onSubmit = () => {
        router.push('/admin');
    }
    return (
      <Box>
        <Stack
          spacing={1}
          sx={{ mb: 3 }}
        >
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            Login
          </Typography>

          <Typography
            color="text.secondary"
            variant="body2"
          >
            Don&apos;t have an account?
            &nbsp;
            <Link href={routesAuth[2].link} underline="none" sx={{fontSize: '14px', color: 'var(--blue-port)'}}>
              Register now
            </Link>

          </Typography>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            name="username"
            type="text"
            autoFocus
            helperText="Usuario"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            type="password"
            id="password"
            helperText="Contraseña"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Recordarme"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            onClick={onSubmit}
          >
            Acceder
          </Button>

          <Box
            sx={{
              marginTop: 1,
              color: '#0d6efd',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/*
                        <Link href="/forgot-password" underline="none" sx={{  fontSize: '14px', color: 'inherit' }}>Forgot password ?</Link>
*/}

          </Box>
        </Box>
      </Box>
    );
}
