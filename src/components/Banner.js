import React from 'react';
import { Container, Grid, Button, Box, Typography, IconButton } from '@mui/material';
import ProfileImg from '../assets/profile.PNG'; // Importe a imagem de perfil
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importe o ícone do WhatsApp

const Banner = () => {
  return (
    <Box 
      className="text-white" 
      sx={{ 
        background: 'linear-gradient(to right, #004225, #007337)', 
        minHeight: '100vh', 
        position: 'relative', 
        py: { xs: 8, md: 12 }, // Ajuste do padding vertical para responsividade
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    > 
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', inset: 0 }} />
      <Container sx={{ position: 'relative', zIndex: 10, flexGrow: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign={{ xs: 'center', md: 'left' }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={ProfileImg}
              alt="Profile"
              className="shadow-lg rounded"
              sx={{
                borderRadius: '25px',
                backgroundColor: '#007337',
                height: { xs: '200px', md: '300px' }, // Ajuste de altura para responsividade
                width: { xs: '200px', md: '300px' }, // Ajuste de largura para responsividade
                objectFit: 'cover',
                display: 'block',
                mx: { xs: 'auto', md: 0 }, // Centraliza no mobile
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Luís Felipe Maciel
            </Typography>
            <Typography variant="h6" gutterBottom>
              A esperança somos nós! Conheça mais sobre nossas propostas e projetos.
            </Typography>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="center" mb={2}>
              <IconButton
                href="https://www.facebook.com/lfmaciel1" // Substitua com o link real
                target="_blank"
                sx={{ color: 'white', mr: 2 }}
              >
                <FacebookIcon />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'white', mr: { xs: 2, md: 4 } }}>Facebook</Typography>

              <IconButton
                href="https://www.instagram.com/luisfelipemacielmg/" // Substitua com o link real
                target="_blank"
                sx={{ color: 'white', mr: 2 }}
              >
                <InstagramIcon />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'white', mr: { xs: 2, md: 4 } }}>Instagram</Typography>

              <IconButton
                href="https://wa.me/1234567890" // Substitua com o link real do WhatsApp
                target="_blank"
                sx={{ color: 'white', mr: 2 }}
              >
                <WhatsAppIcon />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'white' }}>WhatsApp</Typography>
            </Box>
            <Button 
              href="#quem-sou" 
              variant="contained" 
              color="warning" 
              sx={{ 
                textTransform: 'uppercase', 
                fontWeight: 'bold', 
                px: 4, 
                py: 1.5, 
                mx: { xs: 'auto', md: 0 }, // Centraliza no mobile
                display: 'block'
              }}
            >
              Saiba mais
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center', py: 2, color: 'white' }}>
      <Typography 
          variant="h2" 
          fontWeight="bold" 
          sx={{ 
            fontSize: { xs: '3rem', md: '8rem' }, 
            color: '#fdd600'  // Cor amarela fluorescente
          }}
        >
          Vote 25555
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
