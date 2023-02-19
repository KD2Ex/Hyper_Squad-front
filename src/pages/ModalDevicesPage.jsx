import { Close, SearchOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Modal, Stack, TextField, Typography } from '@mui/material';
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


            <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>


                <TextField
                    sx={{borderRadius: 18, m: 2}}
                    variant='filled'
                    InputProps={{ padding: 0,borderRadius: 18,bgcolor: 'white', disableUnderline: 'true', startAdornment: (
                        <InputAdornment margin='0px' position="start" sx={{margin: 0}}>
                            <SearchOutlined sx={{mb: 2}} />
                        </InputAdornment>
                    ),}}
                    size='small'>
                        
                </TextField>

                <IconButton color='secondary' sx={{bgcolor: 'white', borderRadius: 8}}
                    onClick={handleClose}>
                    <Close/>
                </IconButton>

            </Box>

                
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

            <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', mt: 2}}>
                <Box  sx={{flexDirection: 'row',display: 'flex', ml: 2 }} >
                    <Box sx={{width: '30px', height: '30px', p: 0.5, borderRadius: '50%', bgcolor: 'white', textAlign: 'center'}}>
                        1
                    </Box>
                    
                    <Box sx={{width: '30px', height: '30px', p: 0.5, borderRadius: '50%', bgcolor: 'white', textAlign: 'center'}}>
                        2
                    </Box>
                    
                    <Box sx={{width: '30px', height: '30px', p: 0.5, borderRadius: '50%', bgcolor: 'white', textAlign: 'center'}}>
                        ...
                    </Box>
                    
                    <Box sx={{width: '30px', height: '30px', p: 0.5, borderRadius: '50%', bgcolor: 'white', textAlign: 'center'}}>
                        10
                    </Box>
                </Box>

                <Stack direction='row'>

                <Button disabled>Назад</Button>
                <Button>Вперед</Button>
                </Stack>
            </Box>


          </Box>

    </Modal>
  )
}

export default ModalDevicesPage