"use client";
import React from 'react';
import { List, ListItem , ListItemText, SvgIcon } from '@mui/material';
import Image from 'next/image'
import Box from '@mui/material/Box';
import BathroomIcon from '@mui/icons-material/Bathroom';

import classes from './index.module.css'

const AppSidebar = () => {
  return (
    // <div className={classes.sidebar}>
    <Box className={` ${classes.sidebar} `}>
      <ListItem  className={classes.listItem}>
        <div className={`${classes.listItemContent}`}>
         <a href="https://icsco.ai/" target="_blank">
          <Image
            src="/image/ics.svg"
            alt="Logo"
            width={50}
            height={50}
            layout="fixed" 
            className={classes.logo}
          />
        </a>
        </div>    
      </ListItem>

      <ListItem  className={classes.listItem}>
       <div >
          <BathroomIcon />
          <ListItemText primary="##"/>
        </div>    

      </ListItem>
    </Box>
  )
};

export default AppSidebar;