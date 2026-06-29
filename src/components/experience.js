import React, { useState } from "react";
import { Box, Typography, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WorkIcon from '@mui/icons-material/Work';

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

function Experience() {
    const experiences = [
        {
            position: 'Software Engineer',
            company: 'Rangero Technology Solutions LLP',
            location: 'Remote',
            duration: 'Feb 2026 – Present',
            type: 'Full-time',
            bullets: [
                'Developed responsive web applications using React, TypeScript, JavaScript, Tailwind CSS, HTML, and CSS.',
                'Built reusable and responsive UI components for a consistent user experience.',
                'Collaborated with UI/UX designers and backend developers to deliver scalable applications.',
                'Integrated REST APIs and optimized application performance and responsiveness.',
                'Used Git for version control, code reviews, and deployments.',
            ]
        },
        {
            position: 'Frontend Developer',
            company: 'SM Infotech',
            location: 'Chennai',
            duration: 'Jun 2025 – Jan 2026',
            type: 'Full-time',
            bullets: [
                'Contributed to UI development using React, HTML, CSS, and JavaScript.',
                'Developed responsive pages and reusable components.',
                'Collaborated with the team to enhance user experience and performance.',
            ]
        },
        {
            position: 'Web Development Intern',
            company: 'Access Healthcare Services',
            location: 'Chennai',
            duration: 'Jan 2025 – Feb 2025',
            type: 'Internship',
            bullets: [
                'Built UI modules for internal tools using React and modern JavaScript.',
                'Optimized front-end workflows for improved performance.',
                'Contributed to front-end enhancements and code reviews.',
            ]
        },
        {
            position: 'Frontend Development Intern',
            company: 'Alo Info Tech',
            location: 'Chennai',
            duration: 'Jun 2024 – Jul 2024',
            type: 'Internship',
            bullets: [
                'Developed an e-commerce UI with responsive layouts.',
                'Implemented product listing and cart components.',
                'Utilized React and JavaScript to build dynamic features.',
            ]
        },
    ];


    const [selectedIndex, setSelectedIndex] = useState(0);
    const sel = experiences[selectedIndex];

    return (
        <Box sx={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-section)' }}>
            <Box sx={{ padding: { xs: '40px 16px', sm: '60px 24px', md: '80px 60px' }, maxWidth: '1300px', margin: '0 auto' }}>
                <SectionLabel>Experience</SectionLabel>
                <Typography component="h2" sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: '32px', sm: '38px', md: '56px' }, fontWeight: 800,
                    letterSpacing: '-1.5px', lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    marginBottom: { xs: '40px', md: '56px' },
                }}>
                    Experience
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
                            {experiences.map((exp, index) => (
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
                                        <WorkIcon sx={{ fontSize: '16px', color: selectedIndex === index ? 'var(--text-on-accent)' : 'var(--text-muted)' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600,
                                            color: selectedIndex === index ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                            lineHeight: 1.3, transition: 'color 0.25s ease',
                                        }}>
                                            {exp.company}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'var(--text-muted)' }}>
                                            {exp.type}
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
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, marginBottom: '6px' }}>
                            <Typography sx={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: { xs: '18px', md: '22px' }, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px',
                            }}>
                                {sel.position}
                                <Box component="span" sx={{
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                }}>
                                    {' @ ' + sel.company}
                                </Box>
                            </Typography>
                            <Chip label={sel.type} size="small" sx={{
                                fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600,
                                backgroundColor: sel.type === 'Full-time' ? 'var(--accent-secondary-12)' : 'var(--accent-primary-10)',
                                color: sel.type === 'Full-time' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                                border: sel.type === 'Full-time' ? '1px solid var(--accent-secondary-25)' : '1px solid var(--accent-primary-20)',
                                borderRadius: '6px',
                            }} />
                        </Box>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif", fontSize: '13px',
                            color: 'var(--text-muted)', marginBottom: '28px', fontWeight: 500,
                        }}>
                            {sel.location} · {sel.duration}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {sel.bullets.map((bullet, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <CheckCircleOutlineIcon sx={{ color: 'var(--accent-primary)', fontSize: '18px', marginTop: '2px', flexShrink: 0 }} />
                                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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

export default Experience;
