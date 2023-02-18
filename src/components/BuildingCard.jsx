import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../assets/images (2).jpg'

const BuildingCard = ({titile, id}) => {
  return (
    <Card sx={{width: "300px", m: 1}}  component={Link} to={"/" + id}>
        <CardActionArea>
            <CardMedia 
                component="img"
                image={Image}/>
            <CardContent>
                <Typography 
                    variant='h6'>Header</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}


export default BuildingCard;