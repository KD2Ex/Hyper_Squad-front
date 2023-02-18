import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Box, Divider, Drawer, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar } from "@mui/material";
import { redirect } from "react-router-dom";
import BuildingCard from "../components/BuildingCard";
import Carousel from "react-material-ui-carousel";

const MainPage = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    return (
        <div>
            <Button onClick={()=> redirect("/123")}>
                test
            </Button>
            <Stack>

                <BuildingCard id={"1"}/>
                <BuildingCard id={"2"}/>
            </Stack>

                
                
             
        </div>
    );

}

export default MainPage;