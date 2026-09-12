import React from "react";
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SectionLabel = ({ children }) => (
    <Box sx={{
        display: 'inline-flex', alignItems: 'center', gap: 1,
        backgroundColor: 'var(--accent-primary-08)',
        border: '1px solid var(--accent-primary-20)',
        borderRadius: '100px', padding: '4px 14px', marginBottom: '16px',
    }}>
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gradient-primary)' }} />
        <Typography sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px', fontWeight: 600,
            color: 'var(--accent-primary)', letterSpacing: '1px', textTransform: 'uppercase',
        }}>
            {children}
        </Typography>
    </Box>
);

function Contact() {
    const contactInfo = {
        phone: '+91 6369987881',
        email: 'azhaguroobika@gmail.com',
        location: 'Kanyakumari, Tamil Nadu, India'
    };

    const contactItems = [
        {
            icon: <PhoneIcon />,
            label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}`,
            colorVar: 'var(--accent-primary)',
            bgVar: 'var(--accent-primary-10)',
            borderVar: 'var(--accent-primary-20)',
        },
        {
            icon: <EmailIcon />,
            label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`,
            colorVar: 'var(--accent-secondary)',
            bgVar: 'var(--accent-secondary-10)',
            borderVar: 'var(--accent-secondary-20)',
        },
        {
            icon: <LocationOnIcon />,
            label: 'Location', value: contactInfo.location, href: null,
            colorVar: 'var(--accent-purple)',
            bgVar: 'var(--accent-purple-10)',
            borderVar: 'var(--accent-purple-20)',
        },
    ];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '20px 16px 40px', sm: '30px 24px 60px', md: '40px 60px 80px' }, maxWidth: '1300px', margin: '0 auto' }}>
                <SectionLabel>Contact</SectionLabel>
                <Typography component="h2" sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: '32px', sm: '38px', md: '56px' }, fontWeight: 800,
                    letterSpacing: '-1.5px', lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    marginBottom: { xs: '40px', md: '56px' },
                }}>
                    Get In Touch
                    <Box component="span" sx={{
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>.</Box>
                </Typography>

                <Box sx={{
                    display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                    gap: '40px', alignItems: 'flex-start',
                }}>
                    {/* Left - Intro */}
                    <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '420px' } }}>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: { xs: '26px', md: '32px' }, fontWeight: 700,
                            color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '16px',
                        }}>
                            Let's work together
                            <Box component="span" sx={{
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>.</Box>
                        </Typography>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif", fontSize: '15px',
                            color: 'var(--text-secondary)', lineHeight: 1.85,
                        }}>
                            If you are looking for a passionate and dedicated Software Engineer, I would love to connect. I am always open to discussing new opportunities or answering any questions you may have.
                        </Typography>

                        {/* Opportunity card */}
                        <Box sx={{
                            mt: 4, padding: '24px', borderRadius: '16px',
                            background: 'linear-gradient(135deg, var(--accent-primary-08), var(--accent-secondary-08))',
                            border: '1px solid var(--accent-primary-15)',
                            display: 'flex', flexDirection: 'column', gap: '12px'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Box component="span" sx={{ mt: '2px' }}>💼</Box>
                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    Open to <Box component="span" sx={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Software Engineer & Frontend Developer</Box> opportunities
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Box component="span" sx={{ mt: '2px' }}>📍</Box>
                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    Based in <Box component="span" sx={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>Tamil Nadu, India</Box>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Box component="span" sx={{ mt: '2px' }}>✅</Box>
                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    Available for <Box component="span" sx={{ color: 'var(--accent-purple)', fontWeight: 600 }}>remote & on-site</Box> opportunities
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right - Contact cards */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {contactItems.map((item, index) => (
                            <Box
                                key={index}
                                component={item.href ? 'a' : 'div'}
                                href={item.href}
                                sx={{
                                    display: 'flex', alignItems: 'center', gap: '20px',
                                    padding: '20px 24px', borderRadius: '14px',
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border-card)',
                                    textDecoration: 'none',
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        backgroundColor: item.bgVar,
                                        borderColor: item.borderVar,
                                        transform: 'translateX(4px)',
                                    },
                                }}
                            >
                                <Box sx={{
                                    width: 48, height: 48, borderRadius: '12px',
                                    backgroundColor: item.bgVar,
                                    border: `1px solid ${item.borderVar}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: item.colorVar, flexShrink: 0,
                                    '& svg': { fontSize: '22px' }
                                }}>
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: "'Inter', sans-serif", fontSize: '12px',
                                        color: 'var(--text-muted)', fontWeight: 600,
                                        letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '3px',
                                    }}>
                                        {item.label}
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: "'Inter', sans-serif", fontSize: '15px',
                                        color: 'var(--text-primary)', fontWeight: 500,
                                    }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;