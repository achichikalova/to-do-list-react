import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';

const AddListItem = ({ userInput, setUserInput, tasks, setTasks }) => {

  const [error, setError] = useState(null);

  const inputHandler = (e) => {
    setUserInput(e.target.value);
    setError(null);
  }

  const submitTaskHandler = (e) => {
    e.preventDefault();

    const tasksAPI = `https://to-do-app-chi.herokuapp.com/api/tasks`;
    const expData = { text: userInput, id: Math.random().toString(36).substring(2, 9), complete: false };    
    
    if (userInput.length !== 0) {
      axios
        .post(tasksAPI, expData)
        .then(
          setTasks([
            ...tasks,
            {
              text: expData.text,
              id: expData.id,
              complete: expData.complete
            }])
        )
        .catch(err => {
          console.error(err);
        })
    } else {
      setError("Please, print your task first");
    }
    setUserInput('');
  }

  return (
    <Box
      component="form"
      sx={{
        m: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic" 
        label="Print Your Task Here..." 
        variant="standard"
        fullWidth
        onChange={inputHandler}
        value={userInput}
        multiline
        maxRows={4}
        {...(error && {error:!null})}
        helperText={error}
      />
      <AddCircleIcon 
        sx={{
          width: '10%',
          height: '2.2rem',
          color: 'green',
          cursor: 'pointer'          
        }} 
        className='add-btn'
        type='submit'
        onClick={submitTaskHandler}
      />
    </Box>
  )
}

export default AddListItem;