import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import axios from '../base';

function TodoApp() {
  // const data = [
  //   { id: 1, task: 'task 1', isCompleted: false },
  //   { id: 2, task: 'task 2', isCompleted: true },
  //   { id: 3, task: 'task 3', isCompleted: false },
  // ];
  const [todos, setTodos] = useState([]);

  axios
    .get('/todos.json')
    .then(response => setTodos(response.data))
    .catch(err => console.log(err));

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      {/* <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}> */}
      {/* <TodoForm addTodo={addTodo} /> */}
      <TodoList
        todos={todos}
        // removeTodo={removeTodo}
        // toggleTodo={toggleTodo}
        // editTodo={editTodo}
      />
      {/* </Grid>
      </Grid> */}
    </Paper>
  );
}

export default TodoApp;
