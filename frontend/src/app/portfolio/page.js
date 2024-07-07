"use client"
import Box from "@mui/material/Box";
import FirstSection from "@/components/Portfolio/pageSections/FirstSection";
import NameSections from "@/components/Portfolio/pageSections/NameSections";
import About from "@/components/Portfolio/pageSections/About";
import DataAbout from "@/components/Portfolio/pageSections/DataAbout";
import { motion } from "framer-motion"
import React, {useEffect} from "react";
import Services from "@/components/Portfolio/pageSections/Services";
import Skills from "@/components/Portfolio/pageSections/Skills";
import {useDispatch, useSelector} from "react-redux";
import {createUserRedux} from "@/redux/features/auth/personSlice";
import axios from "axios";
import {user_end} from "@/constants/endpoints";
import Loading from "@/components/Loading";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.person);

  useEffect(() => {

    async function fetchData() {
      const username = window.localStorage.getItem('username')

      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_HOST + user_end + '/' + username + '/'
        );

        console.log(response)

        if (response.data && typeof response.data === 'object' && Object.keys(response.data).length > 0) {
          dispatch(createUserRedux({ user: response.data }));
        }
      } catch (error) {
        console.log(error);
      }

    }
    fetchData();
  }, [dispatch]);

  if (!user) {
    return <Loading infoText={'Loading ...'} />
  }

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
            </Box>

            <Skills />

            <Box sx={{paddingX: {xs: 4, md: '120px'}}}>
                <NameSections name={'Servicios'}/>
                <Services />
            </Box>
        </motion.div>
  );
}
