import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { FlatDashboardContext } from '../context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
  };

const ModalPage = ({open, handleClose}) => {

    //{console.log(handleClose)}

    const {isFlatDashboardOpen, setIsFlatDashboardOpen, setSelectedFlat} = useContext(FlatDashboardContext);

    const rows = [
      {id: 1, name: '1-й', type: 'Арендовано'},
      {id: 2, name: '1-й', type: 'В собственности'},
      {id: 3, name: '1-й', type: 'Арендовано'} ,
  ]

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid secondary.main',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
  };

  const handleClick = (event) => {
    handleClose();
    setIsFlatDashboardOpen(true);
    setSelectedFlat(rows[event.target.id - 1])
  }

  return (
    <Modal 
        open={open}
        onClose={handleClose}
        >
          <Box sx={style}>

            <Typography variant="h4" sx={{mb: 2}}>
              Квартиры
            </Typography>

            <TableContainer component={Paper} sx={{width:'100%'}}>
                <Table 
                    sx={{minWidth: 650}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Номер</TableCell>
                                <TableCell>Этаж</TableCell>
                                <TableCell>Состояние</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow 
                                    key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell sx={{textAlign: 'right'}}>{<Button id={row.id} onClick={handleClick}> Перейти</Button>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                  </Table>
            </TableContainer>
          </Box>

    </Modal>
  )
}

export default ModalPage;
