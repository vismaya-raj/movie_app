import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static" color='white'>
      <Toolbar>
        <Typography variant="h6">My Website</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;