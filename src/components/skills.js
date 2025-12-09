import React from "react";
import { Box, Typography } from '@mui/material';

function Skills(){
    const skillCategories = [
        {
            category: "Web Design",
            skills: [
                "UI/UX Design",
                "Responsive Design",
            ]
        },
        {
            category: "Frontend",
            skills: [
                "Javascript",
                "ReactJS",
                "HTML",
                "CSS"
            ]
        },
        {
            category: "Soft Skills",
            skills: [
                "Effective communication",
                "Collaboration",
                "Commitment",
                "Adaptability"
            ]
        }
    ];

    return(
        <Box sx={{
            position: 'relative',
            backgroundColor: 'white',
            padding: { xs: '40px 20px', md: '80px 60px' },
            maxWidth: '1400px',
            margin: '0 auto',
            minHeight: '100vh'
        }}>
            {/* Heading */}
            <Typography sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: '48px', md: '72px' },
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: { xs: '40px', md: '60px' }
            }}>
                Skills
                <Box component="span" sx={{ color: '#9b59b6' }}>.</Box>
            </Typography>

            {/* Skill Categories Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                gap: { xs: '40px', md: '60px' }
            }}>
                {skillCategories.map((category, index) => (
                    <Box key={index}>
                        {/* Category Heading */}
                        <Typography sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: { xs: '20px', md: '24px' },
                            fontWeight: 700,
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            {category.category}
                        </Typography>

                        {/* Skills List */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {category.skills.map((skill, skillIndex) => (
                                <Typography 
                                    key={skillIndex}
                                    sx={{
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        color: '#888888',
                                        lineHeight: 1.6
                                    }}
                                >
                                    {skill}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Skills;

