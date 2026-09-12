import React from "react";
import { Box, Typography, Chip } from '@mui/material';

const SectionLabel = ({ children }) => (
    <Box sx={{
        display: 'inline-flex', alignItems: 'center', gap: 1,
        backgroundColor: 'var(--accent-primary-08)',
        border: '1px solid var(--accent-primary-20)',
        borderRadius: '100px', padding: '4px 14px',
        marginBottom: '16px',
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

function About() {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "TypeScript",
        "React.js", "Tailwind CSS", "Material UI", "REST API Integration",
        "Git", "GitHub", "Responsive Design", "UI Development",
        "Performance Optimization", "Component-Based Architecture", "Cross-Browser Compatibility",
        "Problem Solving", "Teamwork", "Adaptability", "Communication"
    ];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '20px 16px 40px', sm: '30px 24px 60px', md: '40px 60px 80px' }, maxWidth: '1300px', margin: '0 auto' }}>
                {/* About Section */}
                <Box sx={{ marginBottom: { xs: '60px', md: '80px' } }}>
                    <SectionLabel>About Me</SectionLabel>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                        <Box sx={{
                            width: '4px', minHeight: '120px',
                            background: 'var(--gradient-primary)',
                            borderRadius: '4px', flexShrink: 0, mt: '8px',
                        }} />
                        <Box>
                            <Typography component="h2" sx={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: { xs: '32px', sm: '38px', md: '56px' },
                                fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1,
                                marginBottom: '24px', color: 'var(--text-primary)',
                            }}>
                                About me
                                <Box component="span" sx={{
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                }}>.</Box>
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: { xs: '15px', md: '17px' },
                                color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: '680px',
                            }}>
                                Developing beautiful and functional websites is my passion, which is why I dedicate myself entirely to every new challenge. As a Software Engineer specializing in React, TypeScript, and modern front-end technologies, I build scalable, responsive web applications with clean UI/UX. I am a Computer Science graduate driven by a passion for performance and polished interfaces.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* My Stack Section */}
                <Box>
                    <SectionLabel>Tech Stack</SectionLabel>
                    <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: { xs: '28px', md: '40px' }, fontWeight: 700, letterSpacing: '-1px',
                        color: 'var(--text-primary)', marginBottom: '32px',
                    }}>
                        My Stack
                        <Box component="span" sx={{
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>.</Box>
                    </Typography>
                    <Box sx={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '16px', padding: { xs: '20px', md: '28px' },
                        display: 'flex', flexWrap: 'wrap', gap: '8px',
                        justifyContent: 'center',
                    }}>
                        {skills.map((skill, index) => (
                            <Chip key={index} label={skill} sx={{
                                fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500,
                                backgroundColor: 'var(--accent-primary-10)',
                                color: 'var(--accent-primary)',
                                border: '1px solid var(--accent-primary-25)',
                                borderRadius: '6px', height: '32px',
                                transition: 'all 0.2s ease',
                                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' },
                                '& .MuiChip-label': { padding: '0 12px' }
                            }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;