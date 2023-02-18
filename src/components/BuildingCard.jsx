import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../assets/buildings.png'

const BuildingCard = ({titile, id}) => {
  return (
    
    <Card sx={{ m: 1, bgcolor: 'primary.gray'}}  component={Link} to={"/" + id}>
        <CardActionArea>
            <CardMedia 
                component="img"
                width={300}
                height={200}
                sx={{p:4}}
                image={Image}/>
            <CardContent>
                <Divider/>
                <Typography 
                    sx={{
                      textTransfrom: 'none',
                      textAlign: 'center',
                      p:1
                    }}
                    variant='h5'>Комплекс {id}
                  </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}


export default BuildingCard;