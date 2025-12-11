import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Projects(){
    const projects = [
        { 
            title: 'emHealth — Healthcare Backoffice Portal', 
            description: 'Developed a back-office healthcare portal that streamlines lab appointment management with real-time tracking, analytics, and productivity-enhancing workflows.', 
            technologies: 'React, HTML, CSS, JavaScript and MUI Components.',
            bullets: [
                'Built a back-office healthcare portal to efficiently manage and optimize lab appointment workflows.',
                'Implemented real-time tracking and analytics to monitor appointments and improve operational decision-making.',
                'Designed a streamlined, responsive interface that enhances productivity and simplifies daily lab management tasks.'
            ]
        },
        { 
            title: 'Medapto — Healthcare News Aggregator', 
            description: 'A React-based platform that aggregates verified medical news with concise summaries for easy, reliable healthcare updates.', 
            technologies: 'React, HTML, CSS, JavaScript',
            bullets: [
                'Built a platform that aggregates verified medical news from trusted councils, government health departments, and recognized medical journals.',
                'Developed summarized news cards for quick reading and added source links for full verification.',
                'Designed a clean, responsive UI for medical students and healthcare professionals.'
            ]
        },
        { 
            title: 'Portfolio Website', 
            description: 'A fully responsive personal portfolio website to showcase my skills, projects, and contact information. Responsive portfolio using React and MUI.', 
            technologies: 'Build using React and MUI Components.',
            bullets: [
                'Built a fully responsive personal portfolio website using React and MUI',
                'Showcased skills, projects, and contact information with modern UI design',
                'Implemented routing and interactive components for seamless navigation'
            ]
        },
        { 
            title: 'E-Commerce Website', 
            description: 'Developed an effective e-commerce website using HTML and CSS. Gained practical experience in front-end design and usability principles.', 
            technologies: 'Build using HTML and CSS.',
            bullets: [
                'Developed an effective e-commerce website using HTML and CSS',
                'Gained practical experience in front-end design and usability principles',
                'Implemented responsive design for optimal user experience across devices'
            ]
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedProject = projects[selectedIndex];

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
                Projects
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

                    {/* Project list */}
                    <Box sx={{ paddingLeft: '20px' }}>
                        {projects.map((project, index) => (
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
                                    {project.title}
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
                        Project
                        <Box component="span" sx={{ color: '#9b59b6' }}>
                            {' @ ' + selectedProject.title}
                        </Box>
                    </Typography>

                    <Typography sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: '16px',
                        color: '#888888',
                        marginBottom: '24px'
                    }}>
                        {selectedProject.technologies}
                    </Typography>

                    {/* Bullet points */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {selectedProject.bullets.map((bullet, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
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
                                    {bullet}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;