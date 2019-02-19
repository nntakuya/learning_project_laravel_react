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
                    component="input"
                    type="text"
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

export default reduxForm({
    form:'contentForm',
    onSubmitSuccess: afterSubmit
})(TodoForm);
