import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/home" onClick={toggleNav}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/sobre" onClick={toggleNav}>
          <ListItemText primary="Sobre" />
        </ListItem>
        <ListItem button component={Link} to="/contato" onClick={toggleNav}>
          <ListItemText primary="Contato" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static" className="bg-darkGreen">
        <Toolbar className="container mx-auto flex justify-between">
          <Typography variant="h6" component="div">
            Luís Felipe Maciel
          </Typography>
          <div className="hidden md:flex space-x-4">
            <Button component={Link} to="/home" className="text-white">Home</Button>
            <Button component={Link} to="/sobre" className="text-white">Sobre</Button>
            <Button component={Link} to="/contato" className="text-white">Contato</Button>
          </div>
          <IconButton edge="end" color="inherit" aria-label="menu" className="md:hidden" onClick={toggleNav}>
            <FaBars />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={navOpen} onClose={toggleNav}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
