import { DevicesFoldOutlined, DevicesOutlined, LinkedCamera, LinkedCameraOutlined } from '@mui/icons-material';
import { Card, CardContent, Grid, SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useState } from 'react'
import ChartCard from './cards/ChartCard';
import DashboardCard from './cards/DashboardCard';
import OrdersCard from './cards/OrdersCard';
import cameraIcon from '../assets/icon.svg';
import deviceIcon from '../assets/icon (1).svg';
import lightIcon from '../assets/icon (2).svg';
import PieChartCard from './cards/PieChartCard';
import ConsumptionCard from './cards/ConsumptionCard';


const Dashboard = () => {

    const [deviceCount, setDeviceCount] = useState(100);
    const [camerasCount, setCamersCount] = useState(50);

    

    const [orders, setOrders] = useState([
        {id: 1, name: 'Ива  нов Иван', price: '3000р.', date: '12 Янв, 2023'},
        {id: 2, name: 'Иванов Иван', price: '5000р.', date: '14 Янв, 2023'},
        {id: 3, name: 'Иванов Иван', price: '2000р.', date: '15 Янв, 2023'},
        {id: 4, name: 'Иванов Иван', price: '2000р.', date: '16 Янв, 2023'},
    ])

  return (
        <Grid container spacing={2} sx={{bgcolor: 'white', px: 1 }} direction="row">

            <Grid container spacing={2} item xs={3} direction="column">
                    <OrdersCard
                        title="Заявки на ремонт"
                        orders={orders}
                        />
                    <PieChartCard debt={'200 000'}/>
            </Grid>

                   
            <Grid container  spacing={2} item direction="row" sx={{ height:"fit-content" }} xs>
                
                <DashboardCard
                    xs={4}
                    icon={<img  style={{marginBottom: "10px"}}  src={cameraIcon}></img>}
                    currentCount={deviceCount- 7}
                    maxCount={deviceCount}
                    desc="Камер активно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}} src={deviceIcon}></img>}
                    currentCount={camerasCount - 5}
                    maxCount={camerasCount}
                    Modal='Devices'
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
                    income={'250 000'}
                    xs={12}/>
                
                <ConsumptionCard xs={12}/>
                
                
                        
            </Grid>

           

        </Grid>
  )
}

export default Dashboard;