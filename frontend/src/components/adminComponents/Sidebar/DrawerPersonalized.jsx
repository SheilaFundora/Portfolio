import * as React from 'react';
import { Box, Drawer, Typography, List, Divider } from '@mui/material';
import NextLink from 'next/link';
import {routesAdmin} from "@/constants/apiRoutesAdmin";
import {styled} from "@mui/material/styles";
import {Logo} from "@/components/adminComponents/Sidebar/logo";
import SideBarItems from "@/components/adminComponents/Sidebar/SideBarItems";
import {useEffect} from "react";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const DrawerPersonalized = ({ username}) => {
  return (

    <Box>
        <Box sx={{ p: 3 }}>
          <DrawerHeader>
            <Box
              component={NextLink}
              href="/admin"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              <Logo />
            </Box>
          </DrawerHeader>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
                sx={{
                  '&::first-letter': {
                    textTransform: 'uppercase',
                  },
                }}
              >
                {username}
              </Typography>

              <Typography
                sx={{ color: 'gray'}}
                variant="body2"
              >
                Administration panel
              </Typography>
            </div>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'neutral.700' }} />

        <Box sx={{ marginTop: 2}}>
          <List>
            {
              routesAdmin.map((page) => (
                <SideBarItems key={page.name} route={page.link} name={page.name} icon={page.icon}/>
              ))
            }

          </List>
        </Box>
      </Box>

  );
};

export default DrawerPersonalized;
