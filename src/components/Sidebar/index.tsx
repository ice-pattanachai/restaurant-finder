"use client";

import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

import classes from './index.module.css'

const AppSidebar = () => {

  return (
    <div className={classes.sidebar}>
      <List>
        <ListItem button className={classes.listItem}>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </div>
  );
};

export default AppSidebar;