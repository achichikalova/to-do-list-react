import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddListItem = () => {
  return (
    <div className='addListItem-container'>
      <input type='text' placeholder='Print your task here...' />
      <AddCircleIcon className='add-btn'/>
    </div>
  )
}

export default AddListItem;