import { HomeMaxOutlined, HomeMiniOutlined, LogoutOutlined, ViewListOutlined } from '@mui/icons-material'
import { Box, Button, Container, Divider, Drawer, Grid, Link, List, ListItem, ListItemButton, ListItemText, Paper, Tab, Tabs, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import dashIcon from '../assets/Icon (3).svg';
import officeIcon from '../assets/office-building.svg';


const AdminPage = () => {
    const [tabValue, setTabValue] = useState('dash')
    

    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            setTabValue(newValue);
        }
    }


  return (
    <Box sx={{flexGrow: 1, m: 0, height: '100vh'}}>

    <Grid container spacing={0} sx={{height: '100%'}}>

        <Grid container item xs={2} spacing={0} sx={{bgcolor: 'primary.gray', width: "inherit" }}>
                <Box sx={{position: 'sticky',alignSelf: 'flex-start', top: 0, width: 'inherit', m: 0, p: 0 }}>

                    <Tabs
                        value={tabValue}
                        sx={{ minWidth:'100%'}}
                        orientation="vertical"
                        onChange={handleChange}
                        indicatorColor="secondary"
                        >
                            <Tab sx={{height: '16px'}} value="dash" label="Панель управления" iconPosition="start" icon={<img src={dashIcon}></img>} />
                            <Tab value="buildings" label="Здания" iconPosition="start"  icon={<img src={officeIcon}></img>} />
                    </Tabs>
                    
                    <Button startIcon={<LogoutOutlined/>} sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        color: 'rgba(0,0,0,0.3)',
                        fontSize: 16,
                        ml:1.7,
                        mt: 1,
                    }}>Log out</Button>
                </Box>

        </Grid>

        {console.log(tabValue)}
        <Grid container item xs={10} sx={{mt: 4, px: 2, height: 'fit-content'}}>

            {tabValue === 'dash'
                ? <>
                        <Typography variant="h4" fontWeight="bold" sx={{px:2, py: 2}}>Главная панель управления</Typography>
                        <Dashboard/>
                    </>                
                : null}
            
        </Grid>
    </Grid>
    </Box>

  )
}

export default AdminPage