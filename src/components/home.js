import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import profileImage from "../assests/pic.png";
// import profileImage from "../assests/image.jpg";
//import profileImage from "../assests/profile.jpg";

function Home() {
    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            background: 'var(--bg-hero)',
            overflow: 'hidden',
        }}>
            {/* Background blobs */}
            <Box sx={{
                position: 'absolute', top: '-15%', right: '-10%',
                width: { xs: '250px', sm: '300px', md: '600px' }, height: { xs: '250px', sm: '300px', md: '600px' },
                borderRadius: '50%',
                background: `radial-gradient(circle, var(--blob-1) 0%, transparent 70%)`,
                pointerEvents: 'none', zIndex: 0,
            }} />
            <Box sx={{
                position: 'absolute', bottom: '10%', left: '-10%',
                width: { xs: '150px', sm: '200px', md: '400px' }, height: { xs: '150px', sm: '200px', md: '400px' },
                borderRadius: '50%',
                background: `radial-gradient(circle, var(--blob-2) 0%, transparent 70%)`,
                pointerEvents: 'none', zIndex: 0,
            }} />

            {/* Hero Section */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' },
                padding: { xs: '10px 24px 80px', sm: '20px 40px 90px', md: '20px 60px 100px' },
                maxWidth: '1300px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2,
                gap: { xs: '48px', md: '60px' },
                minHeight: 'calc(100dvh - 72px)',
            }}>
                {/* Left - Text Content */}
                <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '580px' } }}>
                    {/* Status badge */}
                    <Box sx={{
                        display: 'inline-flex', alignItems: 'center', gap: 1,
                        backgroundColor: 'var(--accent-secondary-10)',
                        border: '1px solid var(--accent-secondary-25)',
                        borderRadius: '100px', padding: '6px 16px',
                        marginBottom: '28px',
                    }}>
                        <Box sx={{
                            width: 8, height: 8, borderRadius: '50%',
                            backgroundColor: 'var(--accent-secondary)',
                            boxShadow: '0 0 8px var(--accent-secondary-80)',
                            animation: 'pulse 2s infinite',
                            '@keyframes pulse': {
                                '0%, 100%': { opacity: 1 },
                                '50%': { opacity: 0.4 },
                            }
                        }} />
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '13px', fontWeight: 500,
                            color: 'var(--accent-secondary)', letterSpacing: '0.5px',
                        }}>
                            Available for opportunities
                        </Typography>
                    </Box>

                    {/* Greeting */}
                    <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: { xs: '15px', md: '17px' },
                        color: 'var(--text-secondary)', fontWeight: 400,
                        marginBottom: '12px', letterSpacing: '0.2px',
                    }}>
                        Hello, I'm Azhagu Roobika R
                    </Typography>

                    {/* Main Heading */}
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography component="h1" sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: { xs: '38px', sm: '48px', md: '68px', lg: '76px' },
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: '-2px',
                            color: 'var(--text-primary)',
                        }}>
                            Software
                        <br />
                        <Box component="span" sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: { xs: '38px', sm: '48px', md: '68px', lg: '76px' },
                            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px',
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            display: 'block',
                        }}>
                            Engineer.
                        </Box>
                        </Typography>
                    </Box>

                    {/* Description */}
                    <Typography sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: { xs: '15px', md: '17px' },
                        color: 'var(--text-secondary)', lineHeight: 1.75,
                        marginBottom: '36px', maxWidth: '480px',
                    }}>
                    I craft clean, responsive web experiences using React, TypeScript & Tailwind CSS. Passionate about building scalable interfaces that feel premium and performant.
                    </Typography>

                    {/* Tech pills */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: '36px' }}>
                        {['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Git'].map((tech) => (
                            <Chip key={tech} label={tech} size="small" sx={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '12px', fontWeight: 500,
                                backgroundColor: 'var(--accent-primary-08)',
                                color: 'var(--accent-primary)',
                                border: '1px solid var(--accent-primary-20)',
                                borderRadius: '6px',
                                '& .MuiChip-label': { padding: '0 10px' }
                            }} />
                        ))}
                    </Box>

                    {/* CTAs */}
                    <Box sx={{
                        display: 'flex', gap: 2,
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                    }}>
                        <Button
                            component={Link}
                            to="/contact"
                            endIcon={<ArrowForwardIcon fontSize="small" />}
                            sx={{
                                background: 'var(--gradient-primary)',
                                color: 'var(--text-on-accent)',
                                padding: '12px 28px', borderRadius: '10px',
                                textTransform: 'none', fontSize: '15px', fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                boxShadow: '0 4px 20px var(--accent-primary-35)',
                                '&:hover': {
                                    boxShadow: '0 8px 32px var(--accent-primary-55)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.25s ease',
                            }}
                        >
                            Get In Touch
                        </Button>
                        <Button
                            component={Link}
                            to="/projects"
                            startIcon={<CodeIcon fontSize="small" />}
                            sx={{
                                borderColor: 'var(--accent-primary-30)',
                                color: 'var(--accent-primary)',
                                padding: '12px 28px', borderRadius: '10px',
                                textTransform: 'none', fontSize: '15px', fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                border: '1px solid var(--accent-primary-30)',
                                backgroundColor: 'var(--accent-primary-08)',
                                '&:hover': {
                                    borderColor: 'var(--accent-primary)',
                                    backgroundColor: 'var(--accent-primary-12)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.25s ease',
                            }}
                        >
                            View Projects
                        </Button>
                        <Button
                            component="a"
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<DownloadIcon fontSize="small" />}
                            sx={{
                                color: 'var(--text-secondary)',
                                padding: '12px 24px', borderRadius: '10px',
                                textTransform: 'none', fontSize: '15px', fontWeight: 500,
                                fontFamily: "'Inter', sans-serif",
                                border: '1px solid var(--border-subtle)',
                                backgroundColor: 'var(--bg-card)',
                                textDecoration: 'none',
                                display: 'inline-flex', alignItems: 'center',
                                '&:hover': {
                                    borderColor: 'var(--border-subtle)',
                                    backgroundColor: 'var(--bg-card-2)',
                                    color: 'var(--text-primary)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.25s ease',
                            }}
                        >
                            Resume
                        </Button>
                    </Box>
                </Box>

                {/* Right - Profile Image */}
                <Box sx={{
                    flex: { xs: 'none', md: 1 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: { xs: '100%', md: '420px' },
                }}>
                    <Box sx={{ position: 'relative' }}>
                        {/* Glow ring */}
                        <Box sx={{
                            position: 'absolute', inset: '-8px',
                            borderRadius: '50%',
                            background: `radial-gradient(circle, var(--accent-primary-15) 0%, var(--accent-secondary-15) 100%)`,
                            filter: 'blur(20px)',
                            animation: 'rotateGlow 6s linear infinite',
                            '@keyframes rotateGlow': {
                                '0%': { transform: 'rotate(0deg) scale(1)' },
                                '50%': { transform: 'rotate(180deg) scale(1.05)' },
                                '100%': { transform: 'rotate(360deg) scale(1)' },
                            }
                        }} />

                        {/* Gradient border ring */}
                        <Box sx={{
                            width: { xs: '230px', md: '320px' },
                            height: { xs: '230px', md: '320px' },
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            padding: '3px',
                            position: 'relative', zIndex: 1,
                        }}>
                            <Box sx={{
                                width: '100%', height: '100%',
                                borderRadius: '50%',
                                backgroundColor: 'var(--bg-primary)',
                                padding: '6px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                overflow: 'hidden',
                            }}>
                                <Box sx={{
                                    width: '100%', height: '100%',
                                    borderRadius: '50%',
                                    backgroundImage: `url(${profileImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }} />
                            </Box>
                        </Box>

                        {/* Floating badges */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: { xs: '-12px', md: '-16px' },
                            left: { xs: '-12px', md: '-24px' },
                            backgroundColor: 'var(--bg-secondary)',
                            border: '1px solid var(--accent-primary-25)',
                            borderRadius: '12px', padding: '10px 16px',
                            backdropFilter: 'blur(20px)',
                            zIndex: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        }}>
                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                Experience
                            </Typography>
                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'var(--text-primary)', fontWeight: 700 }}>
                                1+ Years
                            </Typography>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: { xs: '-12px', md: '-16px' },
                            right: { xs: '-12px', md: '-24px' },
                            backgroundColor: 'var(--bg-secondary)',
                            border: '1px solid var(--accent-secondary-25)',
                            borderRadius: '12px', padding: '10px 16px',
                            backdropFilter: 'blur(20px)',
                            zIndex: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        }}>
                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                Projects
                            </Typography>
                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'var(--text-primary)', fontWeight: 700 }}>
                                5+ Completed
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Sections */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <About />
                <Education />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </Box>
        </Box>
    );
}

export default Home;