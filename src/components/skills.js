import React from "react";
import { Box, Typography } from '@mui/material';

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

function Skills() {
    const skillCategories = [
        {
            category: "Frontend Design", icon: "🎨",
            colorVar: 'var(--accent-primary)',
            bgVar: 'var(--accent-primary-08)',
            borderVar: 'var(--accent-primary-20)',
            skills: ["UI/UX Design", "Responsive Design", "Figma Basics"]
        },
        {
            category: "Frontend Development", icon: "⚛️",
            colorVar: 'var(--accent-secondary)',
            bgVar: 'var(--accent-secondary-08)',
            borderVar: 'var(--accent-secondary-20)',
            skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"]
        },
        {
            category: "Backend Development", icon: "⚙️",
            colorVar: 'var(--accent-purple)',
            bgVar: 'var(--accent-purple-08)',
            borderVar: 'var(--accent-purple-20)',
            skills: ["REST API Integration", "Authentication & Authorization", "JSON Data Handling"]
        },
        {
            category: "Development Tools", icon: "🛠️",
            colorVar: 'var(--accent-amber)',
            bgVar: 'var(--accent-amber-08)',
            borderVar: 'var(--accent-amber-20)',
            skills: ["Git & GitHub", "Visual Studio Code", "npm / yarn"]
        },
        {
            category: "Professional Skills", icon: "🤝",
            colorVar: 'var(--accent-primary)',
            bgVar: 'var(--accent-primary-08)',
            borderVar: 'var(--accent-primary-20)',
            skills: ["Adaptability", "Team Collaboration", "Communication", "Quick Learner"]
        }
    ];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '40px 16px', sm: '60px 24px', md: '80px 60px' }, maxWidth: '1300px', margin: '0 auto' }}>
                <SectionLabel>Skills</SectionLabel>
                <Typography component="h2" sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: '32px', sm: '38px', md: '56px' }, fontWeight: 800,
                    letterSpacing: '-1.5px', lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    marginBottom: { xs: '40px', md: '56px' },
                }}>
                    My Skills
                    <Box component="span" sx={{
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>.</Box>
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
                    gap: '20px',
                }}>
                    {skillCategories.map((cat, index) => (
                        <Box key={index} sx={{
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: '16px', padding: '28px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: cat.bgVar,
                                borderColor: cat.borderVar,
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                            },
                        }}>
                            <Box sx={{
                                width: 48, height: 48, borderRadius: '12px',
                                backgroundColor: cat.bgVar,
                                border: `1px solid ${cat.borderVar}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '22px', marginBottom: '16px',
                            }}>
                                {cat.icon}
                            </Box>
                            <Typography sx={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '18px', fontWeight: 700,
                                color: cat.colorVar,
                                marginBottom: '16px', letterSpacing: '-0.3px',
                            }}>
                                {cat.category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {cat.skills.map((skill, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Box sx={{
                                            width: 6, height: 6, borderRadius: '50%',
                                            backgroundColor: cat.colorVar, flexShrink: 0, opacity: 0.7,
                                        }} />
                                        <Typography sx={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5,
                                        }}>
                                            {skill}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Skills;
