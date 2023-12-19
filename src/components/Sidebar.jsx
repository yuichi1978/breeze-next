import React from 'react'
import { Typography, List, ListItemButton, ListItemText } from '@mui/material'

const Sidebar = ({ setCateGory }) => {
    return (
        <>
            <Typography sx={{ bgcolor: 'blue', color: 'white', padding: 1 }}>
                カテゴリ
            </Typography>

            <List component={'nav'}>
                <ListItemButton onClick={() => setCateGory('all')}>
                    <ListItemText primary="全て"></ListItemText>
                </ListItemButton>

                <ListItemButton onClick={() => setCateGory('movie')}>
                    <ListItemText primary="映画"></ListItemText>
                </ListItemButton>

                <ListItemButton onClick={() => setCateGory('tv')}>
                    <ListItemText primary="TV"></ListItemText>
                </ListItemButton>
            </List>
        </>
    )
}

export default Sidebar
