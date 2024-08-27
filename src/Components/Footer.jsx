import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: grey[900],
        color: 'white',
        py: 3,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="/" color="inherit" underline="none">
              <Typography variant="body2">Home</Typography>
            </Link>
            <Link href="/about" color="inherit" underline="none">
              <Typography variant="body2">About</Typography>
            </Link>
            <Link href="/contact" color="inherit" underline="none">
              <Typography variant="body2">Contact</Typography>
            </Link>
          </Grid>
          {/* Column 2 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://facebook.com" color="inherit" underline="none" target="_blank">
              <Typography variant="body2">Facebook</Typography>
            </Link>
            <Link href="https://twitter.com" color="inherit" underline="none" target="_blank">
              <Typography variant="body2">Twitter</Typography>
            </Link>
            <Link href="https://instagram.com" color="inherit" underline="none" target="_blank">
              <Typography variant="body2">Instagram</Typography>
            </Link>
          </Grid>
          {/* Column 3 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: info@BigWelt.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            © BigWelt Infotech Pvt Ltd. {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
