'use client'
import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import FooterInfo from "@/components/Portfolio/footerContent/FooterInfo";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useSelector} from "react-redux";

const Footer = () => {
  const {user} = useSelector((state) => state.person)
  const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <FooterInfo user={user} />

            <div className={'my-3'}>
                <Typography variant="body1" align="center" color="textSecondary">
                    © {new Date().getFullYear()} <span  style={{color: '#05097c'}}>{user ? user.firstName : ''}</span>. All rights reserved.
                </Typography>
            </div>

            {isVisible && (
                <IconButton
                    onClick={handleScrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: '#05097c',
                        color: 'white'
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>
            )}
        </div>
    );
};

export default Footer;
