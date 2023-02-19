import { AccountCircleOutlined, DarkModeOutlined, InfoOutlined, NotificationAddOutlined, NotificationsNoneOutlined, SearchOffOutlined, SearchOutlined } from '@mui/icons-material'
import { Badge, IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import avatarIcon from '../assets/Avatar.svg'

const SearchBar = () => {
  return (
    <Stack 
        direction="row"
        sx={{borderRadius: 8, bgcolor:'primary.gray', px:2,py:1, m:2, alignItems:'center'}}>

        <TextField
            sx={{borderRadius: 8, bgcolor: 'white'}}
            variant='filled'

            InputProps={{ bgcolor: 'white', disableUnderline: 'true', startAdornment: (
                    <InputAdornment margin='0px' position="start" sx={{margin: 0}}>
                        <SearchOutlined sx={{mb: 2}} />
                    </InputAdornment>
                ),
            }}
            size='small'>
                
        </TextField>
        <IconButton color="primary.gray" component="label">
            <NotificationsNoneOutlined />
        </IconButton>
        <IconButton color="primary.gray" component="label">
            <DarkModeOutlined />
        </IconButton>
        <IconButton color="primary.gray" component="label">
            <InfoOutlined />
        </IconButton>
        <IconButton  component="label">
            <img src={avatarIcon}></img>
        </IconButton>

        
    </Stack>
  )
}

export default SearchBar