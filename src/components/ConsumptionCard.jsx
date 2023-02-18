import { Button, Card, Grid, MenuItem, Stack, Typography, Menu} from '@mui/material'
import React, { useState } from 'react'
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const ConsumptionCard = ({xs}) => {

    const [diagramType, setDiagramType] = useState('Boда');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      console.log(event);
    };
    const handleClose = (event) => {
      setAnchorEl(null);
      console.log(event.target.outerText);
      setDiagramType(event.target.outerText);
    };

    const COLORS = {
        ['Вода']: 'rgba(68, 68, 68, 0.7)',
        ['Электроэнергия']: 'rgba(248, 193, 62, 1)',
        ['Отопление']: 'rgba(255, 110, 1, 1)',
    }

    const LABELS = {
        ['Вода']: 'м3',
        ['Электроэнергия']: 'кВт * час',
        ['Отопление']: 'Гкал',
    }

    const data = [
        {
            name: 'SEP',
            Вода: 2000,
            Электроэнергия: 1000,
            Отопление: 1500,
        },
        {
            name: 'OCT',
            Вода: 4000,
            Электроэнергия: 700,
            Отопление: 1700,
        },
        {
            name: 'NOV',
            Вода: 3000,
            Электроэнергия: 1200,
            Отопление: 2000,
        },
        {
            name: 'DEC',
            Вода: 5000,
            Электроэнергия: 1500,
            Отопление: 3000,
        },
        {
            name: 'JAN',
            Вода: 4700,
            Электроэнергия: 1100,
            Отопление: 3000,
        },
    ]


    const dataBar = [
        {
            name: 'SEP',
            electricity: '1500киловатт',
        }
    ]
  return (
    <Grid item xs={xs}>
        <Card sx ={{bgcolor: 'primary.gray', p: 2}}>
            <Grid container>
                <Grid item xs={8}>

                <Stack>
                    <Typography fontWeight='bold' sx={{mb: 2}}>Стоимость воды, электроэнергии и отопления</Typography>
                    
                    <LineChart
                        width={500}
                        data={data}
                        height={250}>
                            <XAxis dataKey="name"/>
                            <YAxis  />
                            <Tooltip/>
                            <Legend/>

                            <Line type="monotone" dataKey="Вода" stroke="rgba(68, 68, 68, 0.7)" strokeWidth={3} />
                            <Line type="monotone" dataKey="Электроэнергия" stroke="rgba(248, 193, 62, 1)" strokeWidth={3} />
                            <Line type="monotone" dataKey="Отопление" stroke="rgba(255, 110, 1, 1)" strokeWidth={3} />
                    
                    </LineChart>
                </Stack>
                </Grid>

                <Grid item xs={4} width="100%">

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                    <Typography fontWeight='bold'  sx={{mb: 2}}>
                        Расход
                    </Typography>

                        <Button 
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            {diagramType}
                        </Button>
                    </div>

                    <Menu 
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={handleClose}>Вода</MenuItem>
                        <MenuItem onClick={handleClose}>Электроэнергия</MenuItem>
                        <MenuItem onClick={handleClose}>Отопление</MenuItem>
                    </Menu>

                    <BarChart 
                        width={250}
                        height={250}
                        data={data}>
                            <XAxis dataKey="name" />
                            <YAxis label={{value: LABELS[diagramType], angle: -90, position: "insideLeft"}} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey={diagramType} fill={COLORS[diagramType]} />
                    </BarChart>
                </Grid>
            </Grid>


        </Card>
    </Grid>
  )
}

export default ConsumptionCard