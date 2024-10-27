import React from 'react';
import {Typography} from "@mui/material";
import {Rating} from "@mui/lab";
import CircleIcon from "@mui/icons-material/Circle";

const Language = ({name, value}) => {
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Typography component="legend">{name}</Typography>
        <Rating
          name="read-only"
          value={value}
          readOnly
          sx={{marginY: 1}}
          icon={
            <CircleIcon
              fontSize="inherit"
              style={{
                color: '#FFFFFF',
                fontSize: '12px',
                borderRadius: '50%',
                margin: '0 2px'
              }}
            />
          }
          emptyIcon={
            <CircleIcon
              fontSize="inherit"
              style={{
                color: '#bababa',
                fontSize: '12px',
                borderRadius: '50%',
                margin: '0 2px'
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Language;
