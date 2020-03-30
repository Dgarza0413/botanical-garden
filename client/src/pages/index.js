import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: "url(https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        height: '700px'
    },
    sectionHeight: {
        height: '700px'
    }
}));

const Index = () => {
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                justify={'right'}
                // alignItems={'center'}
                className={classes.background}
                sm={12}
            >
                <Grid>
                    <Typography variant="h1">
                        Botanical Garden
                </Typography>
                    <Typography variant='h3'>
                        An Online botanical solution
                    </Typography>
                    <Link to='/search'>
                        <Button variant="primary">
                            Search
                </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid className={classes.sectionHeight} sm={12}>
                <Grid sm={6}>
                    <div>
                        <img src={'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'} />
                    </div>
                </Grid>
                <Grid sm={6}>
                    <Typography variant='p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                </Grid>
            </Grid>
            <Grid sm={12}>
                subcribe
        </Grid>
            <Grid sm={12}>
                stats
        </Grid>
        </>
    )
}

export default Index