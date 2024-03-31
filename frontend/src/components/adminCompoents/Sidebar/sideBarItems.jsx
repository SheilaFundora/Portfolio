import React from 'react';
import Link from "next/link";
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {usePathname} from "next/navigation";
import Box from "@mui/material/Box";

const SideBarItems = ({route, icon, name}) => {
    const pathname = usePathname();

    return (
        <ListItem disablePadding>
            <Link href={route} className={`link-sidebar-admin ${pathname === route ? 'active' : ''}`}>
                <Box sx={{ display: 'flex', paddingX: 3, paddingY: '5px'  }} >
                    <ListItemIcon sx={{ minWidth: '40px'}}>
                        <span className={`logo-style ${pathname === route ? 'logo-style-active ' : ''}`}>
                            {icon}
                        </span>
                    </ListItemIcon>
                    <ListItemText>
                        <span style={{
                            flexGrow: 1,
                            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                            fontSize: 16,
                            fontWeight: 600,
                            textDecoration: 'none', // Para quitar la línea debajo del enlace
                        }}>{name}</span>
                    </ListItemText>
                </Box>
            </Link>
        </ListItem>
    );
};

export default SideBarItems;