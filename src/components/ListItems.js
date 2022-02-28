import React from 'react';
import ListItemComponent from './ListItem';
import List from '@mui/material/List';

const ListItems = () => {
  return (
    <List sx={{ width: '50vw' }}>
      <ListItemComponent />
      <ListItemComponent />
      <ListItemComponent />
      <ListItemComponent />
    </List>
  )
}

export default ListItems;