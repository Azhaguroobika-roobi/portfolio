import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Experience(){
    const experiences = [
        { 
            position: 'Frontend Developer', 
            company: 'SM infotech',
            location: 'Chennai',
            duration: 'Jun 2025 - Present',
            work: 'Contributing to UI development using React, HTML, CSS, and JavaScript Working on responsive pages and reusable components Collaborating with team to enhance user experience and performance'
        },
        { 
            position: 'Web Development Intern', 
            company: 'Access Healthcare Services Pvt. Ltd.',
            location: 'Chennai',
            duration: 'Jan 2025 – Feb 2025',
            work: 'Built internal tools UI modules, optimized workflows, contributed to front-end improvements.'
        },
        { 
            position: 'Frontend Development Intern', 
            company: 'Alo Info Tech',
            location: 'Chennai',
            duration: 'Jun 2024 – Jul 2024',
            work: 'Developed e-commerce UI, implemented responsive layouts, worked with React & JavaScript.'
        },
        
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedExperience = experiences[selectedIndex];

    return(
        <Box sx={{
            position: 'relative',
            backgroundColor: 'white',
            padding: { xs: '40px 20px', md: '60px 60px' },
            maxWidth: '1400px',
            margin: '0 auto'
        }}>
            {/* Heading */}
            <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: '48px', md: '72px' },
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: { xs: '40px', md: '60px' }
            }}>
                Experience
                <Box component="span" sx={{ color: '#9b59b6' }}>.</Box>
            </Typography>

            {/* Main Content Layout */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '40px', md: '60px' },
                alignItems: 'flex-start'
            }}>
                {/* Left Side - Navigation/Selection Panel */}
                <Box sx={{
                    width: { xs: '100%', md: '250px' },
                    flexShrink: 0,
                    position: 'relative'
                }}>
                    {/* Vertical purple line */}
                    <Box sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: '#9b59b6',
                        opacity: 0.3
                    }} />

                    {/* Experience list */}
                    <Box sx={{ paddingLeft: '20px' }}>
                        {experiences.map((experience, index) => (
                            <Box
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                sx={{
                                    position: 'relative',
                                    padding: '16px 0',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* Purple indicator bar for selected item */}
                                {selectedIndex === index && (
                                    <Box sx={{
                                        position: 'absolute',
                                        left: '-20px',
                                        top: '16px',
                                        bottom: '16px',
                                        width: '2px',
                                        backgroundColor: '#9b59b6'
                                    }} />
                                )}

                                <Typography sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontSize: '18px',
                                    fontWeight: selectedIndex === index ? 600 : 400,
                                    color: selectedIndex === index ? '#9b59b6' : '#4a4a4a',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#9b59b6'
                                    }
                                }}>
                                    {experience.company}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right Side - Content Display Panel */}
                <Box sx={{
                    flex: 1,
                    paddingLeft: { xs: 0, md: '40px' }
                }}>
                    <Typography sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: { xs: '24px', md: '32px' },
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '8px'
                    }}>
                        Experience
                        <Box component="span" sx={{ color: '#9b59b6' }}>
                            {' @ ' + selectedExperience.company}
                        </Box>
                    </Typography>

                    <Typography sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: '16px',
                        color: '#888888',
                        marginBottom: '24px'
                    }}>
                        {selectedExperience.position} • {selectedExperience.location} • {selectedExperience.duration}
                    </Typography>

                    {/* Details */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <CheckCircleIcon sx={{
                                color: '#9b59b6',
                                fontSize: '20px',
                                marginTop: '2px',
                                flexShrink: 0
                            }} />
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                lineHeight: 1.6
                            }}>
                                <strong>Position:</strong> {selectedExperience.position}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <CheckCircleIcon sx={{
                                color: '#9b59b6',
                                fontSize: '20px',
                                marginTop: '2px',
                                flexShrink: 0
                            }} />
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                lineHeight: 1.6
                            }}>
                                <strong>Company:</strong> {selectedExperience.company}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <CheckCircleIcon sx={{
                                color: '#9b59b6',
                                fontSize: '20px',
                                marginTop: '2px',
                                flexShrink: 0
                            }} />
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                lineHeight: 1.6
                            }}>
                                <strong>Location:</strong> {selectedExperience.location}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <CheckCircleIcon sx={{
                                color: '#9b59b6',
                                fontSize: '20px',
                                marginTop: '2px',
                                flexShrink: 0
                            }} />
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                lineHeight: 1.6
                            }}>
                                <strong>Duration:</strong> {selectedExperience.duration}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <CheckCircleIcon sx={{
                                color: '#9b59b6',
                                fontSize: '20px',
                                marginTop: '2px',
                                flexShrink: 0
                            }} />
                            <Typography sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: '16px',
                                color: '#4a4a4a',
                                lineHeight: 1.6
                            }}>
                                <strong>Work:</strong> {selectedExperience.work}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Experience;

