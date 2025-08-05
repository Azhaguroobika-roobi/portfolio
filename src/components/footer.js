import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer(){
    return(
        <div>
            <Box sx={{ background:"#6d5037ff", color: 'white', p: 2, textAlign: 'center' }}>
      <Box sx={{ mb: 1 }}>
        <IconButton href="https://github.com/" target="_blank" sx={{ color: 'white' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/feed/" target="_blank" sx={{ color: 'white' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2">
        © {new Date().getFullYear()} Azhagu Roobika. All Rights Reserved.
      </Typography>
    </Box>
        </div>
    );
}

export default Footer;