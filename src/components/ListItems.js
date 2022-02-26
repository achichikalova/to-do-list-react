import React from 'react';
import ListItemComponent from './ListItem';
import List from '@mui/material/List';

const ListItems = () => {
  return (
    <List>
      <ListItemComponent />
      <ListItemComponent />
      <ListItemComponent />
      <ListItemComponent />
    </List>
  )
}

export default ListItems;