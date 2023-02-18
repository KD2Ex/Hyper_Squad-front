import { AccountCircleOutlined, DarkModeOutlined, InfoOutlined, NotificationAddOutlined, NotificationsNoneOutlined } from '@mui/icons-material'
import { Badge, IconButton, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SearchBar = () => {
  return (
    <Stack 
        direction="row"
        sx={{borderRadius: 8, bgcolor:'primary.gray', px:2,py:1, m:2, alignItems:'center'}}>

        <TextField
            sx={{borderRadius: 8}}
            
            inputProps={{ input: {height: '10'}}}
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

        <Badge badgeContent={4} color="primary">
            <AccountCircleOutlined/>
        </Badge>
    </Stack>
  )
}

export default SearchBar