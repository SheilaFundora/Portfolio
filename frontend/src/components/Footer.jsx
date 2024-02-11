import React from 'react';
import {Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={'m-5'}>
            <div>
                <Typography variant="body1" align="center" color="textSecondary">
                    © {new Date().getFullYear()} Tu Sitio Web. Todos los derechos reservados.
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary">
                    Diseñado con <Link href="https://mui.com/" color="inherit" target="_blank" rel="noopener noreferrer">Material-UI</Link> y desarrollado en <Link href="https://nextjs.org/" color="inherit" target="_blank" rel="noopener noreferrer">Next.js</Link>.
                </Typography>
            </div>
        </div>
    );
};

export default Footer;