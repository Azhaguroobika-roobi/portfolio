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
        "HTML/CSS Mastery", "JavaScript Proficiency", "TypeScript",
        "React Development", "Tailwind CSS", "MUI Component Styling",
        "Responsive Design", "REST API Integration", "Modern UI/UX",
        "Adaptability", "Team Player", "Problem Solving", "Version Control (Git)",
    ];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '60px 24px', md: '80px 60px' }, maxWidth: '1300px', margin: '0 auto' }}>
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
                                fontSize: { xs: '38px', md: '56px' },
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
                                Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge. I'm a Software Engineer specializing in React, TypeScript, and modern frontend technologies — building scalable, responsive web applications with clean UI/UX. Computer Science graduate with a passion for performance and polished interfaces.
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
                        borderRadius: '16px', padding: '28px',
                        display: 'flex', flexWrap: 'wrap', gap: '10px',
                    }}>
                        {skills.map((skill, index) => (
                            <Chip key={index} label={skill} sx={{
                                fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500,
                                backgroundColor: index % 3 === 0 ? 'var(--accent-primary-10)'
                                    : index % 3 === 1 ? 'var(--accent-secondary-10)' : 'var(--bg-card-2)',
                                color: index % 3 === 0 ? 'var(--accent-primary)'
                                    : index % 3 === 1 ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                                border: index % 3 === 0 ? '1px solid var(--accent-primary-25)'
                                    : index % 3 === 1 ? '1px solid var(--accent-secondary-25)' : '1px solid var(--border-subtle)',
                                borderRadius: '8px', height: '36px',
                                transition: 'all 0.2s ease',
                                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' },
                                '& .MuiChip-label': { padding: '0 14px' }
                            }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;