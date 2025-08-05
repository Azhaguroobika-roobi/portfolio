import React from "react";
import { Box, Typography } from '@mui/material';

function About(){
    return(
        <div>
            <Box sx={{ p: 4 }}>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        I'm passionate about building responsive web applications using React, MUI.  Detail-oriented and highly motivated Computer Science graduate
 seeking an entry-level front-end development role. Proficient in HTML,
 CSS, and React, with a passion for creating intuitive and user
friendly interfaces. Dedicated to leveraging teamwork, adaptability,
 and problem-solving skills to contribute effectively to a dynamic
 team while growing and advancing in the field of Computer Science
      </Typography>
    </Box>
        </div>
    );
}

export default About;