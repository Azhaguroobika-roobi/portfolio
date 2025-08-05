import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Nav() {
    return(
      <AppBar position="static" sx={{background:"#6d5037ff"}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>  
    );
}

export default Nav;
