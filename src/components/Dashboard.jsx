import { DevicesFoldOutlined, DevicesOutlined, LinkedCamera, LinkedCameraOutlined } from '@mui/icons-material';
import { Card, CardContent, Grid, SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useState } from 'react'
import ChartCard from './ChartCard';
import DashboardCard from './DashboardCard';
import OrdersCard from './OrdersCard';
import cameraIcon from '../assets/icon.svg';
import deviceIcon from '../assets/icon (1).svg';
import lightIcon from '../assets/icon (2).svg';
import PieChartCard from './PieChartCard';
import ConsumptionCard from './ConsumptionCard';


const Dashboard = () => {

    const [deviceCount, setDeviceCount] = useState(1000);
    const [camerasCount, setCamersCount] = useState(2200);

    

    const [orders, setOrders] = useState([
        {id: 1, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
        {id: 2, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
        {id: 3, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
        {id: 4, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
    ])

  return (
        <Grid container spacing={2} sx={{bgcolor: 'white', px: 1 }} direction="row">

            <Grid container spacing={2} item xs={3} direction="column">
                    <OrdersCard
                        title="Заявки на ремонт"
                        orders={orders}
                        />
                    <PieChartCard/>
            </Grid>

                   
            <Grid container  spacing={2} item direction="row" sx={{ height:"fit-content" }} xs>
                
                <DashboardCard
                    xs={4}
                    icon={<img  style={{marginBottom: "10px"}}  src={cameraIcon}></img>}
                    currentCount={deviceCount}
                    maxCount={deviceCount}
                    desc="Камер активно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}} src={deviceIcon}></img>}
                    currentCount={camerasCount}
                    maxCount={camerasCount}
                    desc="Оборудования исправно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}}  src={lightIcon}></img>}
                    title={camerasCount}
                    currentCount={camerasCount}
                    maxCount={camerasCount}
                    desc="Ламп освещения работают"
                    />
                <ChartCard
                    xs={12}/>
                
                <ConsumptionCard xs={12}/>
                
                
                        
            </Grid>

           

        </Grid>
  )
}

export default Dashboard;