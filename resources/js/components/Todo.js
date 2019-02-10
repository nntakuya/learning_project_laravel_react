import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) =>(
    console.log('Todo',props.todos.todo_data),
    <li>{props.todos.todo_data.title}</li>
)

// const Todo = (props) =>(
//     console.log('Todo props', props.todos),
//     props.todos.map((todo)=>{
//         console.log('li', todo.todo_data.title);
//         <li>{todo.todo_data.title}</li>
//     })
// )

export default Todo;
