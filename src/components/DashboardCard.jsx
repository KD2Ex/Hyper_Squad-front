import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'

const DashboardCard = ({Modal, currentCount, maxCount, icon, desc, xs}) => {

    const [open, setOpen] = useState(false);


    const handleClose = () => {
        console.log('close');
        setOpen(false);
    }

    const handleOpen = () => {
        console.log('close');
        setOpen(true);
    }

  return (
    <Grid item xs={xs} >
        <Card sx={{ borderRadius: 10, bgcolor: 'primary.gray'}}>
            <CardActionArea
                sx={{borderRadius: 'inherit', pl: 1, boxShadow: 2}} 
                onClick={handleOpen}>
                <CardContent>
                    {icon}
                    <Typography variant='h5' fontWeight='bold' flexWrap="nowrap">{currentCount}/{maxCount}</Typography>
                    <Typography flexWrap="wrap" color="primary.main">{desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
  )
}

export default DashboardCard;