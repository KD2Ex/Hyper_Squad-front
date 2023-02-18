import { UndoOutlined } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import BuildingDashboard from './BuildingDashboard';

const BuildingsTable = ({callback, modalRes}) => {

    const [isDashboard, setIsDashboard] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState(null);

   
    const rows = [
        {id: 1, name: 'Здание 1'},
        {id: 2, name: 'Здание 2'},
        {id: 3, name: 'Здание 3'},
    ]

    const handleOpen = (event) => {
        console.log(event.target.id)
        setSelectedBuilding(rows[event.target.id - 1]);
        setIsDashboard(true)
        callback(false);
    }

    const handleBack = () => {
        setIsDashboard(false)
        callback(true);
    }

    

  return (
    <div>

    {isDashboard === true
        ? <>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width:'inherit', paddingLeft: '16px', marginBottom: '8px'}}> 

                <Typography
                    variant='h4'
                    fontWeight='bold'>
                    {selectedBuilding.name}
                </Typography>

                <Button startIcon={<UndoOutlined/>} onClick={handleBack}>
                    Назад
                </Button>
            </div>

            <BuildingDashboard/>
        </> 
        : <TableContainer component={Paper} sx={{width:'100%'}}>
        <Table 
            sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Номер</TableCell>
                        <TableCell>Наименование</TableCell>
                        <TableCell>Подробнее</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow 
                            key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{<Button id={row.id} onClick={handleOpen}> Подробнее</Button>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
        </Table>
    </TableContainer>
    }
    </div>

  )
}

export default BuildingsTable