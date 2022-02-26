import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const ListItemComponent = () => {

  const checkTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  return (    
    <ListItem sx={{ width: '50vw' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <ListItemButton component="div">
          <ThemeProvider theme={checkTheme} >
            <Checkbox sx={{ color: green[500] }} />
          </ThemeProvider>
          <p>Your task</p>
          <Tooltip title='Delete' >
            <DeleteIcon sx={{ color: red[500], m: 2 }}/>            
          </Tooltip>
        </ListItemButton>
      </Box>
    </ListItem>
  )
}

export default ListItemComponent;