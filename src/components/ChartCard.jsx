import { Box, Card, CardActionArea, CardContent, FormControl, Grid, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const ChartCard = ({xs}) => {

    const [selectedMonth, setSelectedMonth] = useState(0);

    const selectItems = [
        {label: 'Январь'},
        {label: 'Февраль'},
        {label: 'Март'},
        {label: 'Апрель'},
        {label: 'Май'},
        {label: 'Июнь'},
    ]

    const data = [
        {
            name: 'Сент',
            Приход: 7000,
            Расход: 2000,
        },
        {
            name: 'Окт',
            Расход: 2500,
            Приход: 5000,
        },
        {
            name: 'Нояб',
            Расход: 3500,
            Приход: 4000,
        },
        {
            name: 'Дек',
            Расход: 2500,
            Приход: 5000,
        },
        {
            name: 'Янв',
            Расход: 2500,
            Приход: 5000,
        },
        {
            name: 'Февр',
            Расход: 2500,
            Приход: 5000,
        },
        {
            name: 'Март',
            Расход: 2500,
            Приход: 5000,
        },
    ]

  return (
    <Grid item xs={xs}>
        <Card sx={{bgcolor: "primary.gray"}} >
                <CardContent>
                    <Typography fontWeight='bold' sx={{p:1}}>Доход / Расход</Typography>


                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <Stack>
                        <FormControl size='small' variant="filled" sx={{borderBottom: 'none', borderRadius: 12}}>
                                <Select value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)} 
                                        disableUnderline={true} 
                                        sx={{borderRadius: 12, fontSize: 14}}>
                                    {selectItems.map((item, index) => (
                                        <MenuItem value={index}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        <Typography 
                            variant="h4"
                            fontWeight="bold"
                            sx={{mt: 2}}>
                            250 000 руб.
                        </Typography> 
                        
                        <Typography 
                            fontWeight="bold"
                            color='primary.main'
                            >
                            Всего потрачено
                        </Typography> 
                        
                    </Stack>
                    <LineChart
                        width={500}
                        height={150}
                        data={data}>
                        <XAxis dataKey="name" />
                        <YAxis label={{fill: 'rgba(255, 110, 1, 1)'}} tickLine={{stroke: 'rgba(255, 110, 1, 1)'}} tick={{  }} 
                            axisLine={{stroke: 'rgba(255, 110, 1, 1)'}}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Расход" stroke="rgba(248, 193, 62, 1)" strokeWidth={3} />
                        <Line type="monotone" dataKey="Приход" stroke="rgba(255, 110, 1, 1)" strokeWidth={3} />
                    </LineChart>           
                    </div>
                </CardContent>            
        </Card>
    </Grid>
  )
}

export default ChartCard