import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddListItem = () => {
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
        label="Print Your Task Here..." variant="standard"
        fullWidth />
      <AddCircleIcon 
        sx={{
          width: '10%',
          height: '2.2rem',
          color: 'green',
          cursor: 'pointer'          
        }} 
        className='add-btn'/>
    </Box>
  )
}

export default AddListItem;