import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Box, Divider, Drawer, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { redirect } from "react-router-dom";
import BuildingCard from "../components/BuildingCard";
import Carousel from "react-material-ui-carousel";

const MainPage = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    return (
        <Box style={{backgroundColor: 'gray',background:' rgba(255,255,255, 0.5)',
             w: '100vw', minHeight:'100vh',
            alignItems:'center', display:'flex', padding: '24px'}}>

            <Stack >
                <Typography
                    variant="h2"
                    fontWeight='bold'>
                    Добро пожаловать!
                </Typography>
           
                <Stack sx={{overflow: 'hidden', alignItems:'center', bgcolor: 'white', borderRadius:4,
                background: 'linear-gradient(180deg, rgba(255,156,7,1) 0%, rgba(255,93,40,1) 71%)',}} 
                component={Paper} direction="row" >

                    <BuildingCard id={"1"}/>
                    <BuildingCard id={"2"}/>
                    <BuildingCard id={"2"}/>
                    <BuildingCard id={"2"}/>

                </Stack>
            </Stack>
        </Box>
    );

}

export default MainPage;