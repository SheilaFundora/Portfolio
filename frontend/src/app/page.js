"use client"
import Box from "@mui/material/Box";
import FirstSection from "@/components/pageSections/FirstSection";
import NameSections from "@/components/other/NameSections";
import About from "@/components/pageSections/About";
import DataAbout from "@/components/other/DataAbout";
import { motion } from "framer-motion"
import React, {useEffect, useState} from "react";
import Services from "@/components/pageSections/Services";

export default function Home() {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.56}}>
            <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
                <FirstSection/>

                <NameSections name={'Acerca de mi'}/>
                <About/>
            </Box>


            <DataAbout />

            <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
                <NameSections name={'Habilidades'}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <NameSections name={'Servicios'}/>
                <Services />
            </Box>


        </motion.div>
    );
}
