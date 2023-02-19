import { DevicesFoldOutlined, DevicesOutlined, LinkedCamera, LinkedCameraOutlined, UndoOutlined } from '@mui/icons-material';
import { Button, Card, CardContent, Grid, SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useContext, useState } from 'react'
import ChartCard from './cards/ChartCard';
import DashboardCard from './cards/DashboardCard';
import OrdersCard from './cards/OrdersCard';
import cameraIcon from '../assets/icon.svg';
import deviceIcon from '../assets/icon (1).svg';
import lightIcon from '../assets/icon (2).svg';
import PieChartCard from './cards/PieChartCard';
import ConsumptionCard from './cards/ConsumptionCard';
import debtIcon from '../assets/Icon (5).svg';
import { FlatDashboardContext } from '../context';


const FlatDashboard = () => {

    const [deviceCount, setDeviceCount] = useState(7);
    const [lightsCount, setLightsCount] = useState(20);

    const {selectedFlat, setSelectedFlat, setIsFlatDashboardOpen, isBuildingDashAcitve, setIsBuildingDashActive} = useContext(FlatDashboardContext);

    const [orders, setOrders] = useState([
        {id: 1, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
        {id: 2, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
        {id: 3, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
        {id: 4, name: 'Jane cooper', price: '1200$', date: '12 Sep, 2023'},
    ])

    const handleBack = () => {
        setSelectedFlat(null)
        setIsFlatDashboardOpen(false);
        setIsBuildingDashActive(true);
        
    }

  return (
        <>
        
        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width:'inherit', paddingLeft: '16px', marginBottom: '8px'}}> 

            <Typography
                variant='h4'
                fontWeight='bold'>
                {selectedFlat?.name}
            </Typography>

            <Button startIcon={<UndoOutlined/>} onClick={handleBack}>
                Назад
            </Button>
        </div>

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
                    Modal={null}
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
        </>

  )
}

export default FlatDashboard;