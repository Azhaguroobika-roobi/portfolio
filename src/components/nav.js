import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function Nav() {
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return(
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography 
            sx={{ 
              fontFamily: "Montserrat, sans-serif",
              fontSize: "24px",
              fontWeight: 600,
              color: "#1a1a1a",
              cursor: 'pointer'
            }}
          >
            Azhagu Roobika.
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Button 
            component={Link}
            to="/"
            sx={{ 
              color: isActive('/') ? '#9b59b6' : '#4a4a4a',
              fontWeight: isActive('/') ? 500 : 400,
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            Home
          </Button>
          <Button 
            component={Link}
            to="/projects"
            sx={{ 
              color: isActive('/projects') ? '#9b59b6' : '#4a4a4a',
              fontWeight: isActive('/projects') ? 500 : 400,
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            Projects
          </Button>
          <Button 
            component={Link}
            to="/about"
            sx={{ 
              color: isActive('/about') ? '#9b59b6' : '#4a4a4a',
              fontWeight: isActive('/about') ? 500 : 400,
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            About
          </Button>
          <Button 
            component={Link}
            to="/skills"
            sx={{ 
              color: isActive('/skills') ? '#9b59b6' : '#4a4a4a',
              fontWeight: isActive('/skills') ? 500 : 400,
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            Skills
          </Button>
        </Box>
      </Box>
    );
}

export default Nav;
