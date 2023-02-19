import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Box, Divider, Drawer, Grid, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { redirect } from "react-router-dom";
import BuildingCard from "../components/cards/BuildingCard";
import Carousel from "react-material-ui-carousel";
import SearchBar from "../components/SearchBar";
import img1 from "../assets/buildingImages/img1.png"
import img2 from "../assets/buildingImages/img2.png"
import img3 from "../assets/buildingImages/img3.png"

const MainPage = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    return (
        <Box style={{backgroundColor: 'gray',background:' rgba(255,255,255, 0.5)',
             w: '100vw',
            alignItems:'center', display:'flex', padding: '24px'}}>

            <Grid container sx={{height:'auto'}} >

                <Grid item xs={12} sx={{height: 'fit-content'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
                        <Typography 
                            fontWeight='bold'
                            textAlign='start'
                            fontSize={24}>
                            Выберите ЖК
                        </Typography>
                        <SearchBar/>
                    </div>
                </Grid>

                <Grid item spacing={2} xs={12} sx={{height: 'fit-content', bgcolor: 'primary.gray', p:2, borderRadius: 4}}>
                    
                    <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap:'wrap'}}>

                    
                        <BuildingCard id={"1"} icon={img1} title={'ЖК ТУРГЕНЕВ'}/>
                        <BuildingCard id={"2"} icon={img2}  title={'ЖК ГУБЕРНСКИЙ'}/>
                        <BuildingCard id={"2"} icon={img3}  title={'ЖК БОЛЬШОЙ'}/>
                        {/* <BuildingCard id={"2"}/>
                        <BuildingCard id={"2"}/> */}
                    </div>
                    
                </Grid>
            </Grid>

        </Box>
    );

}

export default MainPage;