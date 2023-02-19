import { UndoOutlined } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FlatDashboardContext } from '../context';
import BuildingDashboard from './BuildingDashboard';

const BuildingsTable = ({callback, modalRes}) => {

    const [isDashboard, setIsDashboard] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const {isBuildingDashAcitve, setIsBuildingDashActive, setLastBuilding, lastBuilding} = useContext(FlatDashboardContext)

   
    const rows = [
        {id: 1, name: 'Здание 1', adress: 'Северная 405'},
        {id: 2, name: 'Здание 2', adress: 'Северная 405'},
        {id: 3, name: 'Здание 3', adress: 'Северная 405'},
        {id: 4, name: 'Здание 4', adress: 'Северная 405'},
        {id: 5, name: 'Здание 5', adress: 'Северная 405'},
        {id: 6, name: 'Здание 6', adress: 'Северная 405'},
        
    ]

    const handleOpen = (event) => {
        console.log(event.target.id);
        setLastBuilding(rows[event.target.id - 1]);
        setIsBuildingDashActive(true);
        callback(false);
    }

    const handleBack = () => {
        setIsBuildingDashActive(false)
        callback(true);
    }

    

  return (
    <>

    {isBuildingDashAcitve === true
        ? <>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width:'inherit', paddingLeft: '16px', marginBottom: '8px'}}> 

                <Typography
                    variant='h4'
                    fontWeight='bold'>
                    {lastBuilding.name}
                </Typography>

                <Button startIcon={<UndoOutlined/>} onClick={handleBack}>
                    Назад
                </Button>
            </div>

            <BuildingDashboard/>
        </> 
        : <>

            <Typography variant="h4" fontWeight='bold' sx={{pb: 2}}>
                Список зданий
            </Typography>
        
            <TableContainer component={Paper} sx={{width:'100%'}}>
                <Table 
                    sx={{minWidth: 'inherit'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{maxWidth: 30}}>Номер</TableCell>
                                <TableCell>Наименование</TableCell>
                                <TableCell>Адрес</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow 
                                    key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.adress}</TableCell>
                                    <TableCell>{<Button id={row.id} onClick={handleOpen}> Подробнее</Button>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
            
            <Button sx={{color: '#fff', bgcolor: 'secondary.main', my: 2, fontWeight:'400'}} variant='contained'>Добавить объект</Button>
        </>
    }
    </>

  )
}

export default BuildingsTable