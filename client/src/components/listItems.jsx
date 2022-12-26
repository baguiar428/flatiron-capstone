import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email'
import SmsIcon from '@mui/icons-material/Sms'

export const mainListItems = (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
            <ListItemText primary="Dashboard" />
      </ListItemButton>  

      <ListItemButton>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
            <ListItemText primary="Clients" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
            <EmailIcon />
        </ListItemIcon>
            <ListItemText primary="Email Promotions" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
            <SmsIcon />
        </ListItemIcon>
            <ListItemText primary="SMS Promotions" />
      </ListItemButton>
    </React.Fragment>
);