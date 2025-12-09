import React from "react";
import { Box, Typography, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function About(){
    const skills = [
        "HTML/CSS Mastery",
        "JavaScript Proficiency",
        "React Development",
        "MUI Component Styling",
        "Responsive Design Skills",
        "Modern UI/UX Understanding",
        "Adaptability",
        "Team Player",
        "Problem Solving",
        "Version Control (Git/GitHub)",
        
    ];

    return(
        <Box sx={{
            position: 'relative',
            backgroundColor: 'white',
            padding: { xs: '40px 20px', md: '80px 60px' },
            maxWidth: '1400px',
            margin: '0 auto'
        }}>
            {/* About me Section */}
            <Box sx={{ marginBottom: { xs: '60px', md: '80px' } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    {/* Purple accent bar */}
                    <Box sx={{
                        width: '6px',
                        backgroundColor: '#9b59b6',
                        borderRadius: '3px',
                        minHeight: '100px',
                        flexShrink: 0
                    }} />
                    
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: { xs: '48px', md: '72px' },
                            fontWeight: 700,
                            color: '#1a1a1a',
                            lineHeight: 1.1,
                            marginBottom: '24px'
                        }}>
                            About me
                            <Box component="span" sx={{ color: '#9b59b6' }}>.</Box>
                        </Typography>
                        
                        <Typography sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: { xs: '16px', md: '18px' },
                            color: '#4a4a4a',
                            lineHeight: 1.8,
                            maxWidth: '700px'
                        }}>
                            Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge. I'm passionate about building responsive web applications using React and MUI. Detail-oriented and highly motivated Computer Science graduate seeking an entry-level front-end development role.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* My Stack Section */}
            <Box>
                <Typography sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: '32px', md: '48px' },
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '24px'
                }}>
                    My Stack
                    <Box component="span" sx={{ color: '#9b59b6' }}>.</Box>
                </Typography>
                
                <Box sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '12px',
                    padding: '24px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    minHeight: '200px'
                }}>
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            icon={<StarIcon sx={{ color: 'white !important', fontSize: '18px' }} />}
                            label={skill}
                            sx={{
                                backgroundColor: '#666666',
                                color: 'white',
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '14px',
                                fontWeight: 500,
                                padding: '8px 4px',
                                height: 'auto',
                                '& .MuiChip-icon': {
                                    marginLeft: '8px',
                                    marginRight: '-4px'
                                },
                                '& .MuiChip-label': {
                                    paddingLeft: '8px',
                                    paddingRight: '12px'
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default About;