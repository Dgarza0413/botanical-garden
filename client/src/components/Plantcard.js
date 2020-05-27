import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    italics: {
        fontStyle: "italic"
    }
});

export default function PlantCard({ scientific_name, common_name, image }) {
    const classes = useStyles();
    const genusSpecies = scientific_name.split(" ")
    return (
        <Card className={classes.root}>
            {/* <Link to="/detail"> */}
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image.url}
                    title={'plant'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {genusSpecies[0]} <span className={classes.italics}>{genusSpecies[1]}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {common_name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* </Link> */}
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}