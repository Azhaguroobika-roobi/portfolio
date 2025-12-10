import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Education(){
    const educations = [
        { 
            institution: 'Evans Matriculation Higher Secondary School', 
            location: 'N.G.O.Colony , KannyaKumari',
            degree: 'HSC',
            percentage: '64.6%',
            year: '2021 - 2022',
            details: [
                'Degree: Degree Name 1',
                'Location: Location 1',
                'Percentage: XX%',
                'Year: YYYY - YYYY'
            ]
        },
        { 
            institution: 'Arunachala Arts and Science (Women) College', 
            location: 'VelliChanthai , KannyaKumari',
            degree: 'B.Sc Computer Science',
            percentage: '86.2%',
            year: '2022 - 2025',
            details: [
                'Degree: Degree Name 2',
                'Location: Location 2',
                'Percentage: XX%',
                'Year: YYYY - YYYY'
            ]
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedEducation = educations[selectedIndex];

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
                Education
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

                    {/* Education list */}
                    <Box sx={{ paddingLeft: '20px' }}>
                        {educations.map((education, index) => (
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
                                    {education.institution}
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
                        Education
                        <Box component="span" sx={{ color: '#9b59b6' }}>
                            {' @ ' + selectedEducation.institution}
                        </Box>
                    </Typography>

                    <Typography sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: '16px',
                        color: '#888888',
                        marginBottom: '24px'
                    }}>
                        {selectedEducation.degree} • {selectedEducation.location} • {selectedEducation.year}
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
                                <strong>Institution:</strong> {selectedEducation.institution}
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
                                <strong>Location:</strong> {selectedEducation.location}
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
                                <strong>Degree:</strong> {selectedEducation.degree}
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
                                <strong>Percentage:</strong> {selectedEducation.percentage}
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
                                <strong>Year:</strong> {selectedEducation.year}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Education;

