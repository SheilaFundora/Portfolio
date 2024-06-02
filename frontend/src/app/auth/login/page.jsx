'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {routesAuth} from "@/constants/apiRoutesAuth";
import {Stack} from "@mui/material";
import {fetchData} from "@/helper/fetch";
import {login_end, register_end} from "@/constants/endpoints";
import Swal from "sweetalert2";
import {useForm} from "react-hook-form";
import Loading from "@/components/Loading";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            © {new Date().getFullYear()} <span  style={{color: '#05097c'}}>Sheila</span>. Todos los derechos reservados.
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { register, control, handleSubmit } = useForm('formSN');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin= async (data) => {
      try {
        setIsLoading(true); // Activar el estado de carga

        const resp = await fetchData(login_end, data, "POST");
        const body = await resp.json();

        if (resp.status === 201) {
          router.push('/admin')
          const username = body.username;
          const token = body.accessToken;
/*
          const id = body.id;
*/
          const id = 'dccbb1cd-01bc-4a1d-a92f-4338fff303e9';
          window.localStorage.setItem('username', username)
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('id', id)

        }else{
          if (resp.status === 401) {
            await Swal.fire('Error', "Incorrect credentials", 'error');

          }else{
            await Swal.fire('Error', "Error del servidor", 'error');
          }
        }
      }catch (error) {
        console.log(error)
      }finally {
        setIsLoading(false); // Desactivar el estado de carga después de terminar la solicitud
      }
  };



  return (
    <Box sx={{ px: 5, mt: 3}}>
      {isLoading ?
        <Loading infoText={'Loading ...'}/>
        :
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
              <Link href={routesAuth[2].link} underline="none" sx={{fontSize: '14px', color: 'var(--blue-port)', marginLeft: 1}}>
                Register now
              </Link>

            </Typography>
          </Stack>

          <Box sx={{mt: 1}}>
            <form onSubmit={handleSubmit(handleLogin)}>
              <TextField
                margin="normal"
                fullWidth
                id="username"
                name="username"
                type="text"
                autoFocus
                helperText="Username"
                {...register("username")}
                autoComplete="username" // Agregar este atributo
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                type="password"
                id="password"
                helperText="Password"
                {...register("password")}
                autoComplete="current-password" // Agregar este atributo
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                Login
              </Button>

              {/*  <Box
                sx={{
                  marginTop: 1,
                  color: '#0d6efd',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >

                          <Link href="/forgot-password" underline="none" sx={{  fontSize: '14px', color: 'inherit' }}>Forgot password ?</Link>


              </Box>*/}
            </form>
          </Box>
        </Box>
      }

    </Box>
  );
}
