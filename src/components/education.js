import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolIcon from '@mui/icons-material/School';

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

function Education() {
    const educations = [
        {
            institution: 'University of Madras (Distance Education)',
            location: 'Chennai, Tamil Nadu',
            degree: 'Master of Computer Applications',
            percentage: 'Pursuing',
            year: '2025 - Present',
        },
        {
            institution: 'Arunachala Arts and Science (Women) College',
            location: 'Vellichanthai, Kanyakumari',
            degree: 'B.Sc. in Computer Science',
            percentage: '86.2%',
            year: '2022 - 2025',
        },
        {
            institution: 'Evans Matriculation Higher Secondary School',
            location: 'N.G.O. Colony, Kanyakumari',
            degree: 'HSC',
            percentage: '64.6%',
            year: '2021 - 2022',
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const sel = educations[selectedIndex];

    const details = [
        { label: 'Institution', value: sel.institution },
        { label: 'Degree', value: sel.degree },
        { label: 'Location', value: sel.location },
        { label: 'Percentage', value: sel.percentage },
        { label: 'Year', value: sel.year },
    ];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '60px 24px', md: '80px 60px' }, maxWidth: '1300px', margin: '0 auto' }}>
                <SectionLabel>Education</SectionLabel>
                <Typography component="h2" sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: '38px', md: '56px' }, fontWeight: 800,
                    letterSpacing: '-1.5px', lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    marginBottom: { xs: '40px', md: '56px' },
                }}>
                    Education
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
                    <Box sx={{ width: { xs: '100%', md: '260px' }, flexShrink: 0 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {educations.map((edu, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    sx={{
                                        display: 'flex', alignItems: 'center', gap: 2,
                                        padding: '16px 20px', borderRadius: '12px', cursor: 'pointer',
                                        backgroundColor: selectedIndex === index ? 'var(--accent-primary-10)' : 'var(--bg-card)',
                                        border: selectedIndex === index ? '1px solid var(--accent-primary-25)' : '1px solid var(--border-card)',
                                        transition: 'all 0.25s ease',
                                        '&:hover': { backgroundColor: 'var(--accent-primary-08)', borderColor: 'var(--accent-primary-20)' },
                                    }}
                                >
                                    <Box sx={{
                                        width: 36, height: 36, borderRadius: '10px',
                                        background: selectedIndex === index ? 'var(--gradient-primary)' : 'var(--bg-card-2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    }}>
                                        <SchoolIcon sx={{ fontSize: '18px', color: selectedIndex === index ? 'var(--text-on-accent)' : 'var(--text-muted)' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600,
                                            color: selectedIndex === index ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                            lineHeight: 1.3, transition: 'color 0.25s ease',
                                        }}>
                                            {edu.degree}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'var(--text-muted)' }}>
                                            {edu.year}
                                        </Typography>
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
                            fontSize: { xs: '18px', md: '22px' },
                            fontWeight: 700, color: 'var(--text-primary)',
                            marginBottom: '6px', letterSpacing: '-0.5px',
                        }}>
                            {sel.degree}
                            <Box component="span" sx={{
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>
                                {' @ ' + sel.institution}
                            </Box>
                        </Typography>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif", fontSize: '13px',
                            color: 'var(--text-muted)', marginBottom: '28px', fontWeight: 500,
                        }}>
                            {sel.location} · {sel.year}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {details.map((d, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <CheckCircleOutlineIcon sx={{ color: 'var(--accent-primary)', fontSize: '18px', marginTop: '2px', flexShrink: 0 }} />
                                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <Box component="span" sx={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.label}: </Box>
                                        {d.value}
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

export default Education;
