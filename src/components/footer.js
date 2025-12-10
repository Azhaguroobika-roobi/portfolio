import React from "react";
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer(){
    const contactInfo = {
        email: 'azhaguroobika@gmail.com',
        linkedin: 'https://www.linkedin.com/in/azhagu-roobika-b85a82300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtmZDEMFyTgKIcgKWBZqjdg%3D%3D', 
        github: 'https://github.com/Azhaguroobika-roobi'
    };

    return(
        <Box sx={{ 
            backgroundColor: '#232323ff', 
            color: 'white', 
            padding: { xs: '20px 50px', md: '25px 25px' },
            textAlign: 'center'
        }}>
            <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: '24px', md: '32px' },
                fontWeight: 700,
                color: 'white',
                marginBottom: '10px'
            }}>
                Contact Me
            </Typography>
            
            <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: '16px',
                color: '#cccccc',
                marginBottom: '18px'
            }}>
                {contactInfo.email}
            </Typography>

            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '16px',
                marginTop: '18px'
            }}>
                <IconButton
                    component="a"
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        backgroundColor: '#333333',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#9b59b6',
                            color: 'white'
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        backgroundColor: '#333333',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#9b59b6',
                            color: 'white'
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href={`mailto:${contactInfo.email}`}
                    sx={{
                        backgroundColor: '#333333',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#9b59b6',
                            color: 'white'
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    <EmailIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Footer;