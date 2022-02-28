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
    <ListItem>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
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