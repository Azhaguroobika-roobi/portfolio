import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useTheme } from '../context/ThemeContext';

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/experience', label: 'Experience' }
    ];

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: { xs: '0 20px', md: '0 60px' },
                height: '72px',
                backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
            }}>
                {/* Logo */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                            width: 36, height: 36, borderRadius: '10px',
                            background: 'var(--gradient-primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '14px', fontWeight: 800, color: 'white',
                            fontFamily: "'Inter', sans-serif",
                            boxShadow: '0 0 20px var(--accent-primary-40)',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'rotate(5deg) scale(1.05)' }
                        }}>
                            AR
                        </Box>
                        <Typography sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: { xs: '16px', md: '18px' }, fontWeight: 700,
                            color: 'var(--text-primary)', letterSpacing: '-0.3px'
                        }}>
                            Azhagu Roobika
                        </Typography>
                    </Box>
                </Link>

                {/* Desktop Nav */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.path}
                            component={Link}
                            to={item.path}
                            sx={{
                                color: isActive(item.path) ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                fontWeight: isActive(item.path) ? 600 : 400,
                                textTransform: 'none', fontSize: '14px',
                                fontFamily: "'Inter', sans-serif", letterSpacing: '0.3px',
                                padding: '8px 16px', borderRadius: '8px',
                                backgroundColor: isActive(item.path) ? 'var(--accent-primary-10)' : 'transparent',
                                border: isActive(item.path) ? '1px solid var(--accent-primary-20)' : '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'var(--accent-primary-08)',
                                    color: 'var(--accent-primary)',
                                    border: '1px solid var(--accent-primary-15)',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}

                    {/* ── Light / Dark Toggle ── */}
                    <Tooltip title={isDark ? 'Switch to Light' : 'Switch to Dark'} placement="bottom">
                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                ml: 0.5,
                                width: 38, height: 38,
                                borderRadius: '10px',
                                backgroundColor: 'var(--accent-primary-08)',
                                border: '1px solid var(--accent-primary-20)',
                                color: 'var(--accent-primary)',
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                    backgroundColor: 'var(--accent-primary-15)',
                                    transform: 'rotate(20deg) scale(1.08)',
                                },
                            }}
                        >
                            {isDark
                                ? <WbSunnyRoundedIcon sx={{ fontSize: '18px' }} />
                                : <DarkModeRoundedIcon sx={{ fontSize: '18px' }} />
                            }
                        </IconButton>
                    </Tooltip>

                    {/* Hire Me */}
                    <Button
                        component={Link}
                        to="/contact"
                        sx={{
                            ml: 0.5,
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            fontFamily: "'Inter', sans-serif", fontWeight: 600,
                            fontSize: '14px', textTransform: 'none',
                            borderRadius: '8px', padding: '8px 20px',
                            boxShadow: '0 4px 16px var(--accent-primary-30)',
                            '&:hover': {
                                boxShadow: '0 6px 24px var(--accent-primary-55)',
                                transform: 'translateY(-1px)',
                            },
                            transition: 'all 0.2s ease',
                        }}
                    >
                        Hire Me
                    </Button>
                </Box>

                {/* Mobile: theme toggle + hamburger */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                    <Tooltip title={isDark ? 'Switch to Light' : 'Switch to Dark'}>
                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                width: 36, height: 36, borderRadius: '8px',
                                backgroundColor: 'var(--accent-primary-08)',
                                border: '1px solid var(--accent-primary-20)',
                                color: 'var(--accent-primary)',
                                '&:hover': { backgroundColor: 'var(--accent-primary-15)' },
                            }}
                        >
                            {isDark
                                ? <WbSunnyRoundedIcon sx={{ fontSize: '16px' }} />
                                : <DarkModeRoundedIcon sx={{ fontSize: '16px' }} />
                            }
                        </IconButton>
                    </Tooltip>

                    <IconButton
                        onClick={() => setMobileOpen(true)}
                        sx={{
                            color: 'var(--text-primary)',
                            backgroundColor: 'var(--accent-primary-08)',
                            border: '1px solid var(--accent-primary-20)',
                            borderRadius: '8px', padding: '8px',
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 260,
                        background: 'var(--bg-secondary)',
                        borderLeft: '1px solid var(--border-subtle)',
                        padding: '20px',
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'var(--text-primary)', fontSize: '16px' }}>
                        Navigation
                    </Typography>
                    <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'var(--text-secondary)' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {navItems.map((item) => (
                        <ListItem
                            key={item.path}
                            onClick={() => { navigate(item.path); setMobileOpen(false); }}
                            sx={{
                                borderRadius: '10px', cursor: 'pointer',
                                backgroundColor: isActive(item.path) ? 'var(--accent-primary-12)' : 'transparent',
                                border: isActive(item.path) ? '1px solid var(--accent-primary-20)' : '1px solid transparent',
                                '&:hover': { backgroundColor: 'var(--accent-primary-08)' },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: isActive(item.path) ? 600 : 400,
                                    color: isActive(item.path) ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                    fontSize: '15px',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default Nav;
