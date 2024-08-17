import React from 'react';
import { Container, Grid, Button, Box, Typography } from '@mui/material';
import ProfileImg from '../assets/profile.PNG'; // Importe a imagem de perfil

const Banner = () => {
  return (
    <Box className="text-white py-20" sx={{ background: 'linear-gradient(to right, #004225, #007337)', minHeight: '100vh', position: 'relative' }}>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', inset: 0 }} />
      <Container sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center">
          <Grid item md={6}>
            <Box
              component="img"
              src={ProfileImg}
              alt="Profile"
              className="shadow-lg rounded"
              sx={{
                borderRadius: '25px',
                backgroundColor: '#007337',
                height: '300px',
                width: '300px',
                objectFit: 'cover',
                display: 'block',
                mx: 'auto',
              }}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Luís Felipe Maciel
            </Typography>
            <Typography variant="h6" gutterBottom>
              A esperança somos nós! Conheça mais sobre nossas propostas e projetos.
            </Typography>
            <Button href="#quem-sou" variant="contained" color="warning" sx={{ textTransform: 'uppercase', fontWeight: 'bold', px: 4, py: 2 }}>
              Saiba mais
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
