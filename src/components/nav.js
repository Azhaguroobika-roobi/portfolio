import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const mobileOpen = Boolean(anchorEl);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavClick = (path) => {
        navigate(path);
        handleMenuClose();
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/experience', label: 'Experience' }
    ];

    return(
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: { xs: '20px', md: '20px 40px' },
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography 
            sx={{ 
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 600,
              color: "#1a1a1a",
              cursor: 'pointer'
            }}
          >
            Azhagu Roobika R.
          </Typography>
        </Link>
        
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
          {navItems.map((item) => (
            <Button 
              key={item.path}
              component={Link}
              to={item.path}
              sx={{ 
                color: isActive(item.path) ? '#9b59b6' : '#4a4a4a',
                fontWeight: isActive(item.path) ? 500 : 400,
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': { backgroundColor: 'transparent', color: '#9b59b6' }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open menu"
          aria-controls={mobileOpen ? 'mobile-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={mobileOpen ? 'true' : undefined}
          onClick={handleMenuClick}
          sx={{ 
            display: { xs: 'block', md: 'none' },
            color: '#1a1a1a'
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={mobileOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'mobile-menu-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            '& .MuiPaper-root': {
              minWidth: '200px',
              marginTop: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderRadius: '8px'
            }
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              selected={isActive(item.path)}
              sx={{
                color: isActive(item.path) ? '#9b59b6' : '#4a4a4a',
                fontWeight: isActive(item.path) ? 500 : 400,
                fontFamily: "Montserrat, sans-serif",
                fontSize: '16px',
                padding: '12px 20px',
                '&:hover': {
                  backgroundColor: 'rgba(155, 89, 182, 0.1)',
                  color: '#9b59b6'
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(155, 89, 182, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(155, 89, 182, 0.15)'
                  }
                }
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
}

export default Nav;
