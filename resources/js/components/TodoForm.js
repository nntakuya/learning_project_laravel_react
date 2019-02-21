import React from 'react';
import { connect } from 'react-redux';
import { addTodo,submitForm } from '../actions';
import { reduxForm, Field, reset } from 'redux-form';

const TodoForm = (props)=>{

    //データ確認
    console.log('TodoForm props',props.value);
    const {handleSubmit} = props;

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="todo">Todo</label>
                <Field
                    name="title"
                    component={renderField}
                    type="text"
                    label="Title"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

const afterSubmit = (result, dispatch) => dispatch(reset('contentForm'));


//ロジック
//1. dispatch関数で、reduxのstateを更新
//2. axios関数で、バックグラウンド通信で、DBにデータをインサートする
function submit(value, dispatch){
    console.log('TodoForm submit dispatch', dispatch);
    console.log('TodoForm submit value', value);
    // dispatch({type:"ADD_TODO_FETCH",payload:'sample text'});
    dispatch(submitForm(value));
}

//バリデーション
const validate = values =>{
    const errors = {};
    if (!values.title) {
        errors.title='Required'
    }else if(values.title.length > 15){
        errors.title = 'Must be 15 characters or less'
    }

    return errors;
}

//バリデーションエラー表示
const renderField =({
    input,
    label,
    type,
    meta:{touched,error}
})=>(
    <div>
        {/* <label> {label} </label> */}
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && (error && <span> {error} </span>)}
        </div>
    </div>
)


export default reduxForm({
    form:'contentForm',
    onSubmitSuccess: afterSubmit,
    validate,
})(TodoForm);
