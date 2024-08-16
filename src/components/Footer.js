import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box className="bg-darkGreen text-white py-10">
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link href="https://facebook.com" aria-label="Facebook" color="inherit" sx={{ mx: 2 }}>
              <FaFacebookF />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com" aria-label="Twitter" color="inherit" sx={{ mx: 2 }}>
              <FaTwitter />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://instagram.com" aria-label="Instagram" color="inherit" sx={{ mx: 2 }}>
              <FaInstagram />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://youtube.com" aria-label="YouTube" color="inherit" sx={{ mx: 2 }}>
              <FaYoutube />
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © 2023 Luís Felipe Maciel. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
