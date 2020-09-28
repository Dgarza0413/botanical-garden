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
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 160,
    },
    italics: {
        fontStyle: "italic"
    }
});

function PlantCard({
    scientific_name,
    common_name,
    image_url,

}) {
    const classes = useStyles();
    const genusSpecies = scientific_name.split(" ")

    return (
        <Card className={classes.root}>
            {/* <Link to="/detail"> */}
            {/* <CardActionArea> */}
            <CardMedia
                className={classes.media}
                image={image_url || <CircularProgress />}
                title={'plant'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {common_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {genusSpecies[0]} <span className={classes.italics}>{genusSpecies[1]}</span>
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            {/* </Link> */}
            <Link to={"/search/1"}>
                <Button>
                    {`go to ${common_name}`}
                </Button>
            </Link>

        </Card>
    );
}

export default PlantCard;