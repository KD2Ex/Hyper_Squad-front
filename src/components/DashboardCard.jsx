import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import ModalPage from '../pages/ModalPage';

const DashboardCard = ({Modal, currentCount, maxCount, icon, desc, xs, hideSlash}) => {

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
                    <Typography variant='h5' fontWeight='bold' flexWrap="nowrap">
                        {currentCount}
                        {hideSlash === true ? null : '/'}
                        {maxCount}
                    </Typography>
                    <Typography flexWrap="wrap" color="primary.main">{desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        {Modal !== null 
            ? <ModalPage open={open} handleClose={handleClose}/>
            : null
        }
    </Grid>
  )
}

export default DashboardCard;