import React from 'react';
import ListItemComponent from './ListItem';
import List from '@mui/material/List';

const ListItems = ({ tasks, setTasks }) => {
 
  const taskElement = tasks.map(task => {
    return (
      <ListItemComponent 
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        key={task.id}
      />
    )
  })

  return (
    <List sx={{ width: '50vw' }}>
      {taskElement}
    </List>
  )
}

export default ListItems;