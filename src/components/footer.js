import React from "react";
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    const contactInfo = {
        email: 'azhaguroobika@gmail.com',
        linkedin: 'https://www.linkedin.com/in/azhagu-roobika-b85a82300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtmZDEMFyTgKIcgKWBZqjdg%3D%3D',
        github: 'https://github.com/Azhaguroobika-roobi'
    };

    const socials = [
        { icon: <LinkedInIcon />, href: contactInfo.linkedin, label: 'LinkedIn' },
        { icon: <GitHubIcon />, href: contactInfo.github, label: 'GitHub' },
        { icon: <EmailIcon />, href: `mailto:${contactInfo.email}`, label: 'Email' },
    ];

    return (
        <Box sx={{
            backgroundColor: 'var(--bg-footer)',
            borderTop: '1px solid var(--border-subtle)',
            padding: { xs: '40px 24px', md: '56px 60px' },
            transition: 'background-color 0.4s ease',
        }}>
            <Box sx={{
                maxWidth: '1300px', margin: '0 auto',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px',
            }}>
                {/* Brand */}
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, marginBottom: '8px' }}>
                        <Box sx={{
                            width: 32, height: 32, borderRadius: '8px',
                            background: 'var(--gradient-primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '13px', fontWeight: 800, color: 'var(--text-on-accent)',
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            AR
                        </Box>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '16px', fontWeight: 700, color: '#ffffff',
                        }}>
                            Azhagu Roobika R.
                        </Typography>
                    </Box>
                    <Typography sx={{
                        fontFamily: "'Inter', sans-serif", fontSize: '13px',
                        color: 'var(--text-muted)', maxWidth: '280px', lineHeight: 1.6,
                    }}>
                        Software Engineer passionate about building beautiful and functional web experiences.
                    </Typography>
                </Box>

                {/* Social Icons */}
                <Box sx={{ display: 'flex', gap: '12px' }}>
                    {socials.map((social, index) => (
                        <IconButton
                            key={index}
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            sx={{
                                width: 44, height: 44, borderRadius: '50%',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                color: 'var(--text-muted)',
                                '&:hover': {
                                    background: 'var(--gradient-primary)',
                                    color: 'var(--text-on-accent)',
                                    borderColor: 'transparent',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 6px 16px var(--accent-primary-35)',
                                },
                                transition: 'all 0.25s ease',
                                '& svg': { fontSize: '20px' }
                            }}
                        >
                            {social.icon}
                        </IconButton>
                    ))}
                </Box>

                {/* Copyright */}
                <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                    <Typography sx={{
                        fontFamily: "'Inter', sans-serif", fontSize: '13px',
                        color: 'var(--text-muted)',
                        display: 'flex', alignItems: 'center', gap: 0.5,
                        justifyContent: { xs: 'center', md: 'flex-end' },
                    }}>
                        Made with
                        <FavoriteIcon sx={{ fontSize: '12px', color: 'var(--accent-primary)' }} />
                        by Azhagu Roobika
                    </Typography>
                    <Typography sx={{
                        fontFamily: "'Inter', sans-serif", fontSize: '12px',
                        color: 'var(--text-very-muted)', marginTop: '4px',
                    }}>
                        © 2025 All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
