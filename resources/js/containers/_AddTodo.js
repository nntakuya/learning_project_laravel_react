import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'
import {Field, reduxForm, reset } from 'redux-form'

function submit(value, dispatch,sample){
    console.log('value',value);
    console.log('dispatch',dispatch);
    console.log('sample',sample);
    dispatch(addTodo(value));
}

let ContactForm = ({ handleChange, handleSubmit, value, reset }) => {
    // const {handleSubmit, reset} = props;
    console.log('handleSubmit',handleSubmit);
    console.log('value',value);

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

// let ContactForm = props => {
//     const {handleSubmit, reset} = props;
//     console.log('handleSubmit',handleSubmit);
//
//     return (
//         <form
//             onSubmit= {
//                 handleSubmit(submit)
//             }
//         >
//             <div>
//                 <label htmlFor="todo">Todo</label>
//                 <Field name="todo" component="input" type="text" />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//
//     )
// }

//フォーム送信後、フォーム内の値を空にする
const afterSubmit = (result, dispatch) => dispatch(reset('contentForm'))

ContactForm = reduxForm({
    form:'contentForm',
    onSubmitSuccess:afterSubmit
})(ContactForm)

export default ContactForm;
