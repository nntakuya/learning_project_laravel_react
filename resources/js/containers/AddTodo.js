import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'
import {Field, reduxForm, reset } from 'redux-form'

function submit(value, dispatch){
    dispatch(addTodo(value));
}

function submitMyform(data){
    const { createRecord, reset } = this.props;
    return createRecord(data).then(()=>{
        reset()
    });
}

console.log('AddTodo.js');
let ContactForm = props => {
    const {handleSubmit, reset} = props;

    console.log('sample');

    return (
        <form
            onSubmit= {
                handleSubmit(submit)
            }
        >
            <div>
                <label htmlFor="todo">Todo</label>
                <Field name="todo" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>

    )
}

//フォーム送信後、フォーム内の値を空にする
const afterSubmit = (result, dispatch) => dispatch(reset('contentForm'))

ContactForm = reduxForm({
    form:'contentForm',
    onSubmitSuccess:afterSubmit
})(ContactForm)

export default ContactForm;
