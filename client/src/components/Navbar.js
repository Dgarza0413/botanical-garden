import React from 'react';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar'


const Navbar = () => {
    return (
        <AppBar position="static">
            <Typography variant="h3">
                Botanical Garden
            </Typography>
        </AppBar>
    )
}

export default Navbar
