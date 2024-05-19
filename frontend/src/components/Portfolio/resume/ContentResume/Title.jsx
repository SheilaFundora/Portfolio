import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from "next/link";

const Title = ({name, subinfo='', linkPlace = ''}) => {
    return (
        <div>
            <span style={{color: '#2c4964', fontWeight: '500', fontSize: '18px'}}>
                {name}
            </span>
            {subinfo !== '' ? <span style={{color: '#2c4964', fontSize: '16px'}}>, {subinfo}</span> : ''}
            {linkPlace !== '' ? <span style={{color: '#2c4964', fontSize: '16px'}}>
                <Link href={'https://mui.com/'} style={{ color: 'gray', fontSize: '16px', textDecoration: 'none' }}>
                     <LaunchIcon style={{ marginLeft: '8px',fontSize: '16px', verticalAlign: 'middle', marginRight: '5px' }} />
                </Link>
            </span> : ''}
        </div>
);
};

export default Title;
