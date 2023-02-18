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
import debtIcon from '../assets/Icon (5).svg';


const FlatDashboard = () => {

    const [deviceCount, setDeviceCount] = useState(7);
    const [lightsCount, setLightsCount] = useState(20);

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
            </Grid>

                   
            <Grid container spacing={2} item direction="row" sx={{ height:"fit-content" }} xs>
                
                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}} src={deviceIcon}></img>}
                    currentCount={deviceCount}
                    maxCount={deviceCount}
                    desc="Оборудования исправно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}}  src={lightIcon}></img>}
                    title={lightsCount}
                    currentCount={lightsCount}
                    maxCount={lightsCount}
                    desc="Ламп освещения работают"
                    />
                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}}  src={debtIcon}></img>}
                    title={lightsCount}
                    currentCount={'3000 руб.'}
                    hideSlash={true}
                    desc="Общей задолженности"
                    />
                
                <ConsumptionCard xs={12}/>
                
            </Grid>

        </Grid>
  )
}

export default FlatDashboard;