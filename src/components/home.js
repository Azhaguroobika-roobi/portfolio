import React from "react";
import { Box, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';


function Home() {
    return(
         <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',background: 'linear-gradient(135deg, #ae917bff 0%, #705640ff 100%)',color: 'white' }}>
      <Typography variant="h2">Hello, I'm Azhagu Roobika</Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>Frontend Developer | React | .NET Enthusiast</Typography>
    </Box>
    );
}

export default Home;