import React, { useState } from "react";
import { Box, Typography, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

function Projects() {
    const projects = [
        {
            title: 'Rangero', subtitle: 'SDS Management Platform',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'REST API'],
            bullets: [
                'Worked on both the Admin Dashboard and Customer Website for the Rangero SDS management platform.',
                'Built responsive, reusable UI components and integrated REST APIs to deliver a seamless user experience.',
                'Implemented admin modules for managing Safety Data Sheets (SDS), users, content, and platform operations.',
                'Optimized application performance, responsiveness, and accessibility across desktop and mobile devices.',
            ]
        },
        {
            title: 'emHealth', subtitle: 'Healthcare Backoffice Portal',
            technologies: ['React', 'Material UI', 'JavaScript', 'CSS'],
            bullets: [
                'Built a back-office healthcare portal to efficiently manage and optimize lab appointment workflows.',
                'Implemented real-time tracking and analytics to monitor appointments and improve operational decision-making.',
                'Designed a streamlined, responsive interface that enhances productivity and simplifies daily lab management tasks.',
            ]
        },
        {
            title: 'Medapto', subtitle: 'Healthcare News Aggregator',
            technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
            bullets: [
                'Built a platform that aggregates verified medical news from trusted councils and medical journals.',
                'Developed summarized news cards for quick reading with source links for full verification.',
                'Designed a clean, responsive UI for medical students and healthcare professionals.',
            ]
        },
        {
            title: 'Portfolio Website', subtitle: 'Personal Portfolio',
            technologies: ['React', 'Material UI', 'JavaScript'],
            bullets: [
                'Built a fully responsive personal portfolio website using React and MUI.',
                'Showcased skills, projects, and contact information with modern UI design.',
                'Implemented routing and interactive components for seamless navigation.',
            ]
        },
        {
            title: 'E-Commerce Website', subtitle: 'Front-End E-Commerce',
            technologies: ['HTML', 'CSS'],
            bullets: [
                'Developed an effective e-commerce website using HTML and CSS.',
                'Gained practical experience in front-end design and usability principles.',
                'Implemented responsive design for optimal user experience across devices.',
            ]
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const sel = projects[selectedIndex];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '40px 16px', sm: '60px 24px', md: '80px 60px' }, maxWidth: '1300px', margin: '0 auto' }}>
                <SectionLabel>Projects</SectionLabel>
                <Typography component="h2" sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: '32px', sm: '38px', md: '56px' }, fontWeight: 800,
                    letterSpacing: '-1.5px', lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    marginBottom: { xs: '40px', md: '56px' },
                }}>
                    Projects
                    <Box component="span" sx={{
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>.</Box>
                </Typography>

                <Box sx={{
                    display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                    gap: '40px', alignItems: 'flex-start',
                }}>
                    {/* Left Panel */}
                    <Box sx={{ width: { xs: '100%', md: '280px' }, flexShrink: 0 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {projects.map((project, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    sx={{
                                        padding: '16px 20px', borderRadius: '12px', cursor: 'pointer',
                                        backgroundColor: selectedIndex === index ? 'var(--accent-primary-10)' : 'var(--bg-card)',
                                        border: selectedIndex === index ? '1px solid var(--accent-primary-25)' : '1px solid var(--border-card)',
                                        transition: 'all 0.25s ease',
                                        '&:hover': { backgroundColor: 'var(--accent-primary-08)', borderColor: 'var(--accent-primary-20)' },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Box sx={{
                                            width: 8, height: 8, borderRadius: '50%',
                                            background: selectedIndex === index ? 'var(--gradient-primary)' : 'var(--text-muted)',
                                            flexShrink: 0, transition: 'background 0.25s ease',
                                        }} />
                                        <Box>
                                            <Typography sx={{
                                                fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600,
                                                color: selectedIndex === index ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                                transition: 'color 0.25s ease',
                                            }}>
                                                {project.title}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'var(--text-muted)' }}>
                                                {project.subtitle}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Right Panel */}
                    <Box sx={{
                        flex: 1,
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '20px',
                        padding: { xs: '28px 24px', md: '36px 40px' },
                    }}>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: { xs: '22px', md: '26px' }, fontWeight: 700,
                            color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '6px',
                        }}>
                            {sel.title}
                            <Box component="span" sx={{
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                fontSize: '18px', fontWeight: 600,
                            }}>
                                {' — ' + sel.subtitle}
                            </Box>
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: '28px', marginTop: '14px' }}>
                            {sel.technologies.map((tech, i) => (
                                <Chip key={i} label={tech} size="small" sx={{
                                    fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500,
                                    backgroundColor: 'var(--accent-primary-08)',
                                    color: 'var(--accent-primary)',
                                    border: '1px solid var(--accent-primary-20)',
                                    borderRadius: '6px',
                                    '& .MuiChip-label': { padding: '0 10px' }
                                }} />
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {sel.bullets.map((bullet, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <CheckCircleOutlineIcon sx={{ color: 'var(--accent-secondary)', fontSize: '18px', marginTop: '2px', flexShrink: 0 }} />
                                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                                        {bullet}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;