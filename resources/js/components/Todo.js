import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) =>(
    // console.log('Todo',props),
    <li>{props.title}</li>
)

export default Todo;
