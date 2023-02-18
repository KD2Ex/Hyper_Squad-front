import { HomeMaxOutlined, HomeMiniOutlined, InfoOutlined, LogoutOutlined, SettingsOutlined, ViewListOutlined } from '@mui/icons-material'
import { Box, Button, Container, Divider, Drawer, Grid, Link, List, ListItem, ListItemButton, ListItemText, Paper, Tab, Tabs, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Dashboard from '../components/Dashboard'
import dashIcon from '../assets/Icon (3).svg';
import officeIcon from '../assets/office-building.svg';
import SearchBar from '../components/SearchBar';
import BuildingsTable from '../components/BuildingsTable';
import logo from '../assets/Frame 1056.png';
import { FlatDashboardContext } from '../context';
import FlatDashboard from '../components/FlatDashboard';


const AdminPage = () => {
    const [tabValue, setTabValue] = useState('dash')
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const {isFlatDashboardOpen, setIsFlatDashboardOpen} = useContext(FlatDashboardContext);
    console.log(isFlatDashboardOpen);

    const sidebarXs = isSidebarOpen === true ? 2 : 0;
    const dashXs = isSidebarOpen === true ? 10 : 12;
    const sidebarVisibility = isSidebarOpen === true ? 'flex' : 'none';


    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            setTabValue(newValue);
        }
    }

    const modalCallback = (value) => {
        setIsFlatDashboardOpen(value);
    }


  return (
    <Box sx={{flexGrow: 1, m: 0, height: '100vh'}}>

    <Grid container spacing={0} sx={{height: '100%'}}>

        <Grid container item xs={sidebarXs} spacing={0} sx={{bgcolor: 'primary.gray', width: "inherit",display: `${sidebarVisibility}`}}>
                <Box sx={{position: 'sticky',alignSelf: 'flex-start', top: 0, width: 'inherit', m: 0, p: 0 }}>


                    <Box sx={{p: 4, display: 'flex', justifyContent: 'center'}}>
                        <img style={{m: 'auto'}}src={logo}></img>    

                    </Box>

                    <Divider/>

                    <Typography sx={{mt: 4, mb: 2}}
                        fontWeight='bold'
                        fontSize={18}
                        textAlign='center'>
                        Администратор
                    </Typography>

                    <Tabs
                        value={tabValue}
                        sx={{ minWidth:'100%'}}
                        orientation="vertical"
                        onChange={handleChange}
                        indicatorColor="secondary"
                        >
                            <Tab sx={{height: '16px'}} value="dash" label="Панель управления" iconPosition="start" icon={<img src={dashIcon}></img>} />
                            <Tab value="buildings" label="Здания" iconPosition="start"  icon={<img src={officeIcon}></img>} />
                            <Tab value="settings" label="Параметры" iconPosition="start"  icon={<SettingsOutlined/>} />
                            <Tab value="info" label="Справка" iconPosition="start"  icon={<InfoOutlined/>} />
                    </Tabs>
                    
                    <Button startIcon={<LogoutOutlined/>} sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        color: 'rgba(0,0,0,0.3)',
                        fontSize: 16,
                        ml:1.7,
                        mt: 1,
                    }}>Выход</Button>
                </Box>

        </Grid>

        {console.log(tabValue)}
        <Grid container item xs={dashXs} sx={{mt: 4, px: 2, height: 'fit-content'}}>

            {tabValue === 'dash'
                ? <>
                    <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', width:'inherit',
                        paddingRight:'8px'}}>

                        <Typography variant="h4" fontWeight="bold" sx={{px:2, py: 2}}>Главная панель управления</Typography>
                        <SearchBar/>
                    </div>
                    <Dashboard/>
                </>                
                : tabValue === 'buildings' && isFlatDashboardOpen === false
                ? <BuildingsTable callback={(value) => setIsSidebarOpen(value)}/>
                : tabValue === 'buildings' && isFlatDashboardOpen === true &&
                 <FlatDashboard/>}
            
        </Grid>
    </Grid>
    </Box>

  )
}

export default AdminPage