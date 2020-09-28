import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Index = () => {
    return (
        <>
            <Grid
                container
                justify={'right'}
                sm={12}
            >
                <Grid>
                    <Typography variant="h1">Botanical Garden</Typography>
                    <Typography variant='h3'>An Online botanical solution</Typography>
                    <Link to='/search'>
                        <Button variant="primary">Search</Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default Index