import React from 'react';
import TitleWhite from "@/components/cv/TitleWhite";
import {ListItem, ListItemIcon, Typography} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";

const Certificate = ({name, link}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
      <div style={{flex: 1}}> {/* Contenedor flexible para el texto */}
        <Typography noWrap>{name}</Typography>
      </div>

      <ListItem disablePadding>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <ListItemIcon>
            <OpenInNewIcon
              sx={{
                color: '#ffffff',
                marginLeft: 1,
                fontSize: '15px',
              }}
            />
          </ListItemIcon>
        </Link>
      </ListItem>
    </div>
  );
};

export default Certificate;
