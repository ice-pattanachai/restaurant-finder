'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Grid from'@mui/material/Grid'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'var(--t-blue1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={true} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Grid item>
            <span style={{ margin: '0 8px', color:'var(--t-blue1)'}}>|</span>
          </Grid>

          {/* <Tooltip title="pattanachai">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/150659852?v=4" />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="GitHub pattanachai">
            <a href="https://github.com/ice-pattanachai/"  target="_blank">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/150659852?v=4" />
              </IconButton>
            </a>
          </Tooltip>

          <Typography variant="subtitle1" sx={{ color: 'var(--t-w)', ml: 2 }}>Account</Typography>
        
          <Tooltip title="pattanachai">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <KeyboardArrowDownIcon sx={{ color: 'var(--t-w)', ml: 1 }} />
            </IconButton>
          </Tooltip>
          
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
