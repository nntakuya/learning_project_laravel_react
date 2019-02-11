import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { reduxForm, Field, reset } from 'redux-form';

const TodoForm = (props)=>{

    //データ確認
    // console.log('handleSubmit',handleSubmit),
    // console.log('handleChange',handleChange),
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

// const afterSubmit=(result,dispatch)=>dispatch(reset('contentForm'));
const afterSubmit = (result, dispatch) => dispatch(reset('contentForm'));


//ロジック
//1. dispatch関数で、reduxのstateを更新
//2. axios関数で、バックグラウンド通信で、DBにデータをインサートする
function submit(value, dispatch){
    console.log('TodoForm submit value', value);
    dispatch(addTodo(value));

    //バックグラウンドにデータを送信
    axios
        .post('/api/createTodo',{
            title: value.title
        })
        .then((res)=>{
            console.log('TodoForm.js' res',res);
            //追加したデータのidを取得し、TodoListの末尾に追加する処理が必要？
            //しかし、何もしなくてもTodoListのTodoコンポーネントが追加されている
            //おそらく、app.jsで<propvider>タグでstoreを囲んでいるため、自動で追加されている気がする

        })
        .catch(error=>{
            console.log('error TodoForm.js',error);
        })



}

export default reduxForm({
    form:'contentForm',
    onSubmitSuccess: afterSubmit
})(TodoForm);
