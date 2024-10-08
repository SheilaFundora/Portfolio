import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {useSelector} from "react-redux";
import {formatDate} from "@/helper/convertDate";
import {section_end} from "@/constants/endpoints";
import {getDataByParamer} from "@/helper/getDataByParamer";
import Image from "next/image";



const About = () => {
  const { user } = useSelector((state) => state.person);
  const [sectionData, setSectionData] = React.useState([]);
  const {img} = useSelector((state) => state.images)
  const imgMe = (img || []).find(item => item.section === 'Me' || item.section === 'me');

  useEffect( () => {
    const username = process.env.NEXT_PUBLIC_USERNAME

    const endSectByTitle =  section_end  +  '/find/' +  'About/'  + username  + '/'
    getDataByParamer(endSectByTitle, setSectionData);

  }, [])

  const { ref, inView } = useInView({
    triggerOnce: true, // Para que la animación solo se active una vez
    threshold: 0.1, // Umbral de visibilidad, 0.5 significa que al menos la mitad del elemento debe estar visible
  });

  return (
      <Box>
          <p className={'text-style'}>
            {sectionData ? sectionData.description : ''}
          </p>

          <Box
              sx={{
                  display: 'flex',
                  flexDirection: {xs: 'column', md: 'row'},
                  marginTop: 4,
              }}
          >



            {
              imgMe && imgMe.imgs ?
                <Image
                  src={ imgMe.imgs }
                  alt={'Me'}
                  width={230}
                  height={230}
                  priority
                />
                :
                ''
            }
            <Box
              sx={{
                marginLeft: {xs: 0, md: '100px'}, width: '100%'
              }}
            >
              <Box sx={{paddingTop: {xs: 3, md: 0}}}>
                <h2 style={{color: '#545556', fontFamily: '"Playfair Display", serif'}}>
                  {user ? user.profession : ''}
                </h2>
              </Box>

              <Grid container spacing={2} sx={{marginTop: {xs: 0, md: 1}}}>
                <Grid item xs={12} md={8} lg={6}>
                <p className={'text-style'}><b>Birthday:</b> {user ? formatDate(user.birthday) : ''}</p>
                          <p className={'text-style'}><b>Phone:</b> {user ? user.phone : ''}</p>
                          <p className={'text-style'}><b>City: </b> {user ? user.address: ''}</p>
                          <p className={'text-style'}><b>Email: </b>{user ? user.email : ''}</p>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                          <p className={'text-style'}><b>Degree:</b> {user ? user.degree : ''}</p>
                          <p className={'text-style'}><b>Level: </b>{user ? user.level : ''}</p>
                          <p className={'text-style'}><b>Freelance: </b>
                            {user ? user.freelancer ? 'Available' : 'No Available' : ''}
                          </p>
                          <p className={'text-style'}><b>Remote: </b>
                            {user ? user.remote ? 'Available' : 'No Available' : ''}
                          </p>
                      </Grid>
                  </Grid>

              </Box>
          </Box>

      </Box>
  );
};

export default About;
