import React from 'react';
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";

const TitleResume = ({name, subinfo='', linkPlace = ''}) => {
  return (
    <div>
      <div>
            <span style={{fontWeight: '500', fontSize: '18px'}}>
                {name}
            </span>
        {subinfo !== '' ? <span style={{fontSize: '16px'}}>, {subinfo}</span> : ''}
        {linkPlace !== '' ? <span style={{fontSize: '16px'}}>
                <Link href={'https://mui.com/'} style={{color: 'white', fontSize: '16px', textDecoration: 'none'}}>
                     <LaunchIcon
                       style={{marginLeft: '8px', fontSize: '16px', verticalAlign: 'middle', marginRight: '5px'}}/>
                </Link>
            </span> : ''}
      </div>
    </div>
  );
};

export default TitleResume;
