import React, {useEffect} from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import {getData} from "@/helper/crud/getData";
import {socialNet_end} from "@/constants/endpoints";

const ContactInfo = ({personData}) => {
  const [socialNetData, setSocialNetData] = React.useState([]);

  useEffect( () => {
    getData(socialNet_end, setSocialNetData)
  }, [])

  const socialNetLink = (name) => {
    const linkSocialNet = socialNetData.filter(item =>
      item.name.toLowerCase()  === name
    )
    if( linkSocialNet.length > 0){
      const text = linkSocialNet[0].link
      const lines = text.split('\n');
      const formattedLinks = lines.map(line => {
        return line.replace(/https?:\/\//, '').replace('www.', '');
      });

      return formattedLinks.filter(link => link); // Filtrar líneas vacías

      }else{
        return ''
      }
    }

  const contactInfo = [
    {
      text: personData.phone,
      icon: <PhoneIcon />,
    },
    {
      text: personData.address,
      icon: <FmdGoodIcon />,
    },
    {
      text: personData.email,
      icon: <EmailIcon />,
    },
    {
      icon: <GitHubIcon />,
      link:  socialNetData !== undefined && socialNetLink('github')
    },
    {
      icon: <LinkedInIcon />,
      link: socialNetData !== undefined && socialNetLink('linkedin'), // Reemplaza con tu URL de LinkedIn
    },
    {
      icon: <InsertLinkIcon />,
      link: socialNetData !== undefined && socialNetLink('portfolio'), // Reemplaza con tu URL de LinkedIn
    },

  ];



  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {contactInfo.map((item, index) => (
          <ListItem key={index}
                    component={item.link ? 'a' : 'div'}
                    href={item.link || undefined}
                    sx={{
                      padding: 0, // Reduce el padding para que estén más juntos
                      paddingBottom: '3px',
                    }}
          >
            <ListItemIcon
              sx={{
                fontSize: '10px',
                color: 'white',
                marginRight: '15px', // Aplica margen derecho
                minWidth: '0', // Asegúrate de que no haya ancho mínimo
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '10px',color: 'white' }} primary={<Typography variant="body1">
              {item.text === undefined ? item.link : item.text}
            </Typography>} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactInfo;
