import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos}) =>(
    <ul>
        <li>sample text</li>
        <li>sample text</li>
        <li>sample text</li>
    </ul>
)


const mapStateTodProps = state => ({
    todos: state.todos
})

export default connect(mapStateTodProps,null)(TodoList);
