import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) =>(
    // console.log('Todo',props.todos.todo_data),
    <li>{props.todos.todo_data.title}</li>
)

export default Todo;
