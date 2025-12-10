import React from "react";
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact(){
    const contactInfo = {
        phone: '+91 6369987881',
        email: 'azhaguroobika@gmail.com',
        location: 'Kannyakumari, Tamil Nadu, India'
    };

    return(
        <Box sx={{
            position: 'relative',
            backgroundColor: 'white',
            padding: { xs: '40px 20px', md: '60px 60px' },
            maxWidth: '1400px',
            margin: '0 auto'
        }}>
            {/* Heading */}
            <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: '48px', md: '72px' },
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: { xs: '20px', md: '30px' }
            }}>
                Contact
                <Box component="span" sx={{ color: '#9b59b6' }}>.</Box>
            </Typography>

            {/* Main Content Layout */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <Typography sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: '24px', md: '32px' },
                    fontWeight: 700,
                    color: '#1a1a1a',
                }}>
                    Get in Touch
                    <Box component="span" sx={{ color: '#9b59b6' }}>.</Box>
                </Typography>

                <Typography sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: '16px',
                    color: '#4a4a4a',
                    lineHeight: 1.8,
                }}>
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </Typography>

                {/* Contact Information */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <PhoneIcon sx={{
                            color: '#9b59b6',
                            fontSize: '24px',
                            marginTop: '2px',
                            flexShrink: 0
                        }} />
                        <Box>
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '14px',
                                color: '#888888',
                                marginBottom: '4px'
                            }}>
                                Phone
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                fontWeight: 500
                            }}>
                                {contactInfo.phone}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <EmailIcon sx={{
                            color: '#9b59b6',
                            fontSize: '24px',
                            marginTop: '2px',
                            flexShrink: 0
                        }} />
                        <Box>
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '14px',
                                color: '#888888',
                                marginBottom: '4px'
                            }}>
                                Email
                            </Typography>
                            <Typography 
                                component="a"
                                href={`mailto:${contactInfo.email}`}
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontSize: '16px',
                                    color: '#4a4a4a',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: '#9b59b6'
                                    }
                                }}
                            >
                                {contactInfo.email}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <LocationOnIcon sx={{
                            color: '#9b59b6',
                            fontSize: '24px',
                            marginTop: '2px',
                            flexShrink: 0
                        }} />
                        <Box>
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '14px',
                                color: '#888888',
                                marginBottom: '4px'
                            }}>
                                Location
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                fontWeight: 500
                            }}>
                                {contactInfo.location}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;