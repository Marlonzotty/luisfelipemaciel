import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import ProfileImg from '../assets/profile.PNG'; // Importar a imagem de perfil

const Sobre = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        sx={{
          backgroundColor: '#002b16', 
          color: '#FFFFFF', 
          padding: 4, 
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Avatar 
          src={ProfileImg} 
          alt="Luís Felipe Maciel" 
          sx={{ width: 120, height: 120, marginBottom: 3 }}
        />
        <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
          Luís Felipe Maciel
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Luís Felipe Maciel é um profissional dedicado e apaixonado por sua área de atuação. Com uma vasta experiência em [sua área de atuação], ele tem se destacado por seu comprometimento e habilidade em [detalhes específicos sobre sua carreira ou contribuições].
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 2 }}>
          Ele é conhecido por sua ética de trabalho, liderança e pela capacidade de transformar desafios em oportunidades. Luís Felipe continua a inspirar e liderar projetos inovadores que têm um impacto significativo na comunidade e em seu campo de especialização.
        </Typography>
      </Box>
    </Container>
  );
};

export default Sobre;
