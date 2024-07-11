"use client"
import Box from "@mui/material/Box";
import FirstSection from "@/components/Portfolio/pageSections/FirstSection";
import NameSections from "@/components/Portfolio/pageSections/NameSections";
import About from "@/components/Portfolio/pageSections/About";
import DataAbout from "@/components/Portfolio/pageSections/DataAbout";
import { motion } from "framer-motion"
import React from "react";
import Services from "@/components/Portfolio/pageSections/Services";
import Skills from "@/components/Portfolio/pageSections/Skills";


export default function Home() {
  return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.56}}>
            <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
                <FirstSection/>

                <NameSections name={'About me'}/>
                <About/>
            </Box>

            <DataAbout />

            <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
                <NameSections name={'skill'}/>
            </Box>

            <Skills />

            <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
                <NameSections name={'Services'}/>
                <Services />
            </Box>
        </motion.div>
  );
}
