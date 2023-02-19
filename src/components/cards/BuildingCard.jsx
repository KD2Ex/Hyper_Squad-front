import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../assets/buildings.png'

const BuildingCard = ({title = 'ЖК ТУРГЕНЕВ', id, icon}) => {
  return (
    <Grid item container xs={4} >
    <Card sx={{ m: 1, bgcolor: 'white', textDecoration: 'none'}} component={Link} to={"/" + id}>
        <CardActionArea>
            <CardContent sx={{height: '40%'}}>
                <Typography 
                    sx={{
                      textDecoration: 'none',
                      textAlign: 'left',
                      p:1,
                      fontWeight: 'bold',
                      color: 'primary.main',
                      
                    }}
                    variant='h5'>
                      {title}
                  </Typography>
            </CardContent>
            <CardMedia 
                component="img"
                sx={{p:0}}
                image={icon}/>
        </CardActionArea>
    </Card>
    </Grid>
  )
}


export default BuildingCard;