import { SearchOutlined } from '@mui/icons-material';
import { Box, Button, InputAdornment, Modal, Stack, TextField, Typography } from '@mui/material';
import React from 'react'

const ModalDevicesPage = ({open, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'primary.gray',
        border: '1px solid secondary.main',
        borderRadius: 8,
        boxShadow: 24,
        p: 4,
      };


      const devices = [
        {id: 1, name: 'Оборудование', UUID: '3422b448-2460-4fd2-9183-8000de6f8343'},
        {id: 2, name: 'Оборудование', UUID: '3422b448-2460-4fd2-9183-8000de6f8343'},
        {id: 3, name: 'Оборудование', UUID: '3422b448-2460-4fd2-9183-8000de6f8343'},
        {id: 4, name: 'Оборудование', UUID: '3422b448-2460-4fd2-9183-8000de6f8343'},
        {id: 5, name: 'Оборудование', UUID: '3422b448-2460-4fd2-9183-8000de6f8343'},
      ]

  return (
    <Modal
        open={open}
        onClose={handleClose}
        >
          <Box sx={style}>

          <TextField
            sx={{borderRadius: 18}}
            variant='filled'
            InputProps={{ padding: 0,borderRadius: 18,bgcolor: 'white', disableUnderline: 'true', startAdornment: (
                <InputAdornment margin='0px' position="start" sx={{margin: 0}}>
                    <SearchOutlined sx={{mb: 2}} />
                </InputAdornment>
            ),}}
            size='small'>
                
        </TextField>
            
            {/* <Typography variant="h4" fontWeight='bold' sx={{m:1, pb: 2}}>
                Оборудование
            </Typography> */}

            {devices.map((device, index) => (
                <Stack direction="row" sx={{borderRadius: 8, bgcolor: 'white', alignItems: 'center', m:1}}>
                    <Typography fontWeight='bold' sx={{p: 2, color: 'primary.main'}}>{device.name} {device.id} </Typography>
                    <Typography sx={{opacity: '0.7'}}>{device.UUID}</Typography>
                    <Button sx={{m:1, color: 'secondary.main'}}>Подробнее</Button>
                </Stack>
            ))}

          </Box>

    </Modal>
  )
}

export default ModalDevicesPage