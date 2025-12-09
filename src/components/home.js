import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import profileImage from "../assests/image.jpg";

function Home() {
    return(
      <Box sx={{ 
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'white',
        overflow: 'hidden'
      }}>
        {/* Hero Section */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '40px 20px', md: '80px 60px' },
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Side - Text Content */}
          <Box sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '600px' },
            marginRight: { xs: 0, md: '60px' }
          }}>
            <Typography sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: '18px', md: '22px' },
              color: '#4a4a4a',
              marginBottom: '20px'
            }}>
              Hey, I'm Azhagu Roobika 👋
            </Typography>

            <Box sx={{ marginBottom: '24px' }}>
              <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: '48px', md: '72px' },
                fontWeight: 700,
                color: '#9b59b6',
                lineHeight: 1.1,
                display: 'inline-block'
              }}>
                Frontend
              </Typography>
              <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: '48px', md: '72px' },
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.1,
                display: 'inline-block',
                marginLeft: '8px'
              }}>
                Developer
              </Typography>
            </Box>

            <Typography sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: '16px', md: '18px' },
              color: '#4a4a4a',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              I'm a frontend developer specializing in React, I'll help you build beautiful websites your users will love.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'nowrap' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  padding: '10px 30px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                  '&:hover': {
                    backgroundColor: '#2a2a2a'
                  }
                }}
              >
                Get In Touch
              </Button>
              <Button
                component={Link}
                to="/projects"
                variant="outlined"
                sx={{
                  borderColor: '#e0e0e0',
                  color: '#4a4a4a',
                  padding: '10px 30px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: '#f5f5f5',
                  '&:hover': {
                    borderColor: '#d0d0d0',
                    backgroundColor: '#f0f0f0'
                  }
                }}
              >
                Browse Projects
              </Button>
              <Button
                component="a"
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  borderColor: '#e0e0e0',
                  color: '#4a4a4a',
                  padding: '10px 30px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: '#f5f5f5',
                  textDecoration: 'none',
                  '&:hover': {
                    borderColor: '#d0d0d0',
                    backgroundColor: '#f0f0f0'
                  }
                }}
              >
                Download Resume
              </Button>
            </Box>
          </Box>

          {/* Right Side - Image */}
          <Box sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '400px'
          }}>
            <Box sx={{
              width: { xs: '250px', md: '300px' },
              height: { xs: '250px', md: '300px' },
              borderRadius: '50%',
              border: '3px solid rgba(155, 89, 182, 0.3)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f9f9f9'
            }}>
              <Box sx={{
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {/* Profile image */}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Other Sections */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Box>
      </Box>
    );
}

export default Home;