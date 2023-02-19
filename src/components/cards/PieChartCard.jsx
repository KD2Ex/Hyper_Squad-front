import { Card, CardActionArea, FormControl, Grid, Select, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

const PieChartCard = ({xs, debt}) => {

    const data =[
        {name: 'Полная', value: 44},
        {name: 'Частичная', value: 14},
        {name: 'Остаток', value: 42},
    ]

    const COLORS = [ '#fff','#FFA867', '#FF6E01'];

  return (
    <Grid item xs={xs}>
        <Card sx={{bgcolor: 'primary.gray', p: 2}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography  fontWeight='bold' flexWrap="nowrap" width="fit-content">
                    Задолженности
                </Typography>

                <FormControl size='small' variant="filled" sx={{borderBottom: 'none', borderRadius: 12}}>
                    
                    <Select disableUnderline={true} sx={{borderRadius: 12, fontSize: 14}}>
                        
                    </Select>
                </FormControl>
            </div>
                



            <div style={{display: 'flex', flexDirection:'column', alingItems: 'center', textAlign: 'center', justifyContent: 'center', maxWidth: "ihnerit", flexWrap:'wrap'}}>

                <PieChart 
                    width={150}
                    height={150}
                    style={{margin: 'auto'}}>
                    <Pie
                        data={data}
                        dataKey="value"
                        fill="rgba(255, 110, 1, 1)"
                        startAngle={-270}
                        >

                            {data.map((item, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]}></Cell>
                            ))}

                    </Pie>
                </PieChart>
                <Typography sx={{my: 1}} fontWeight='bold'>
                    {debt + " руб."} 
                </Typography>
                <Stack direction="row" sx={{m: 'auto'}}>
                    {data.map((item, index) => (
                        <Typography color={index === 0 ? '#000' : COLORS[index]} sx={{mx: 1, }}>
                            {item.value + ' %'}
                        </Typography>
                    ))}
                </Stack>
            </div>

        </Card>
        
    </Grid> 
  )
}

export default PieChartCard