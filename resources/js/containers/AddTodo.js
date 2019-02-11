import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import {addTodo} from '../actions'

let ContentForm = ({ handleInsertSubmit, values }) =>(
    console.log('AddTodo.js handleInsertSubmit',handleInsertSubmit),
    console.log('AddTodo.js values',values),
    <TodoForm
        // onSubmit={ values =>handleInsertSubmit(values.todo) }
    />
)



// const mapDispatchToProps = (dispatch) => ({
//     handleInsertSubmit: value => dispatch(addTodo(value))
// })

export default connect(null,null)(ContentForm);
