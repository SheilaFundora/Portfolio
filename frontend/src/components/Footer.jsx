import React from 'react';
import {Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={'m-3'}>
            <div>
                <Typography variant="body1" align="center" color="textSecondary">
                    © {new Date().getFullYear()} Sheila. Todos los derechos reservados.
                </Typography>
            </div>
        </div>
    );
};

export default Footer;