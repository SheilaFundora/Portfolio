import React, {useEffect} from 'react';
import Link from "next/link";
import Box from "@mui/material/Box";
import {ListItem, ListItemIcon} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from "@mui/material/IconButton";
import {getData} from "@/helper/crud/getData";
import {socialNet_end} from "@/constants/endpoints";


const SocialNet = () => {
  const [socialNetData, setSocialNetData] = React.useState([]);

  useEffect( () => {
    getData(socialNet_end, setSocialNetData)
  }, [])

  const icons = {
    instagram: <InstagramIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />,
    facebook: <FacebookIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />,
    linkedin: <LinkedInIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />,
    github: <GitHubIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />,
    twitter: <TwitterIcon sx={{ color: 'var(--blue-port)', fontSize: '20px' }} className={'network-hov'} />
  };


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    }}>

      {socialNetData.map((network) => (
        <div key={network.id}>
          <ListItem disablePadding>
            <Link href={network.link} target="_blank" rel="noopener noreferrer">
              <ListItemIcon>
                <IconButton
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    padding: '6px',
                    borderColor: '#05097c',
                    border: '1px solid #05097c'
                  }}
                  className={'network-hov-border'}
                >
                  {icons[network.name.toLowerCase()]}
                </IconButton>
              </ListItemIcon>
            </Link>
          </ListItem>
        </div>
      ))}

    </Box>
  );
};

export default SocialNet;
