import React from "react";
import { Box, Grid, Card, CardContent, Typography, TextField, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact(){
    return(
        <div>
            <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Get in Touch
      </Typography>          
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%',maxWidth:'100%', textAlign: 'center', p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Contact Information</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <IconButton disabled><PhoneIcon /></IconButton>
                <Typography>+91 6369987881</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <IconButton disabled><EmailIcon /></IconButton>
                <Typography>azhaguroobika@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton disabled><LocationOnIcon /></IconButton>
                <Typography>Kannyakumari ,Tamil Nadu , India</Typography>
              </Box>
            </CardContent>
            </Card>
            </Grid>
            </Grid>

      <Typography variant="h4" sx={{ mb: 2 }}>Contact Me</Typography>
      <TextField label="Name" fullWidth sx={{ mb: 2 }} />
      <TextField label="Email" fullWidth sx={{ mb: 2 }} />
      <TextField label="Message" multiline rows={4} fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" sx={{background:"#6d5037ff"}}>Send Message</Button>
    </Box>
        </div>
    );
}

export default Contact;