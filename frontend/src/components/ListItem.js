import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import axios from 'axios';

const ListItemComponent = ({ task, tasks, setTasks }) => {
  const [checked, setChecked] = useState(false);

  const checkTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  const deleteHandler = () => {
    const tasksAPI = `http://localhost:3001/api/tasks/${task.id}`;
    const expData = { id: task.id };

    axios
      .delete(tasksAPI, expData)
      .then(
        setTasks(tasks.filter(elem => elem.id !== task.id))
      )
      .catch(err => {
        console.log(err);
      })
  }

  const completeHandler = () => {
    const tasksAPI = `http://localhost:3001/api/tasks/${task.id}`;
    const expData = { id: task.id, complete: !task.complete };    

    axios.put(tasksAPI, expData);
    setTasks(tasks.map(elem => {
      if (elem.id === task.id) {
        return {
          ...elem, 
          complete: expData.complete
        }
      }     
      return elem;
    }));
  }

  useEffect(() => {
    setChecked(task.complete);
  }, [tasks])

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
        <ListItemButton component="div" style={{display: 'flex', justifyContent: 'space-between'}}>
          <ThemeProvider theme={checkTheme} >
            <Checkbox 
              sx={{ color: green[500], margin: '0 1rem' }}
              onClick={completeHandler}
              checked={checked}
            />
          </ThemeProvider>
          <p style={{ textDecoration : task.complete ? 'line-through' : 'none', fontSize: '1.2rem' }}>{task.text}</p>
          <Tooltip title='Delete' >
            <DeleteIcon 
              sx={{ color: red[500], m: 2 }}
              onClick={deleteHandler}              
            />            
          </Tooltip>
        </ListItemButton>
      </Box>
    </ListItem>
  )
}

export default ListItemComponent;