import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import {addTodo} from '../actions'

let ContentForm = ({ handleInsertSubmit, values }) =>(
    console.log('AddTodo.js handleInsertSubmit',handleInsertSubmit),
    console.log('AddTodo.js values',values),
    <TodoForm />
)

export default connect(null,null)(ContentForm);
