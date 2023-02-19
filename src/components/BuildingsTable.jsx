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
        {id: 1, name: '16-ти этажный жилой дом', adress: 'Северная 401'},
        {id: 2, name: '16-ти этажный жилой дом', adress: 'Северная 402'},
        {id: 3, name: '16-ти этажный жилой дом', adress: 'Северная 403'},
        {id: 4, name: '16-ти этажный жилой дом', adress: 'Северная 404'},
        {id: 5, name: '16-ти этажный жилой дом', adress: 'Северная 405'},
        {id: 6, name: '16-ти этажный жилой дом', adress: 'Северная 406'},
        
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


                <Button onClick={handleBack} sx={{fontSize: '20px'}}>
                    Назад
                </Button>

                <Typography
                    fontSize={20}
                    fontWeight='bold'
                    sx={{mx: 1}}
                    >
                        /
                </Typography>
                
                <Typography
                    fontSize={24}
                    fontWeight='bold'>
                     {lastBuilding.adress}
                </Typography>

                
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
                                <TableCell>Адрес</TableCell>
                                <TableCell>Категория</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow 
                                    key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.adress}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell sx={{textAlign: 'right'}}>{<Button id={row.id} onClick={handleOpen}> Перейти</Button>}</TableCell>
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