import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {

    const classes = useStyles();

    console.log(place)
    return (
        <h1>{place.name}</h1>
    );
}

export default PlaceDetails;