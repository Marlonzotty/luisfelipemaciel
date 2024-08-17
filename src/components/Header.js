import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import ProfileImg from '../assets/profile.PNG'; // Importar a imagem de perfil

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
      <AppBar 
        position="static" 
        sx={{
          background: 'linear-gradient(to right, #002b16, #FFD700)',
        }}
      >
        <Toolbar className="container mx-auto flex justify-between">
          <div className="flex items-center">
            <Avatar src={ProfileImg} alt="Profile" sx={{ marginRight: 2 }} /> {/* Adiciona a imagem de perfil */}
            <Typography variant="h6" component="div">
              Luís Felipe Maciel
            </Typography>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button component={Link} to="/home" sx={{ color: '#FFFFFF' }}>Home</Button>
            <Button component={Link} to="/sobre" sx={{ color: '#FFFFFF' }}>Sobre</Button>
            <Button component={Link} to="/contato" sx={{ color: '#FFFFFF' }}>Contato</Button>
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
