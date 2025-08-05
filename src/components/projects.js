import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Projects(){
    const projects = [
    { title: 'E-Commerce Website', description: ' Developed an effective e-commerce website using HTML and CSS.Gained practical experience in front-end design and usability principles.', technologies:'Build using HTML and CSS.' },
    { title: 'Portfolio Website', description: 'A fully responsive personal portfolio website to showcase my skills, projects, and contact information.Responsive portfolio using React and MUI.',technologies:'Build using React and MUI Components.' },
  ];
    return(
        <div>
            <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>My Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="h6">{project.technologies}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        </div>
    );
}

export default Projects;