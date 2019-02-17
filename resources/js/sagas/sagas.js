import React from 'react';
import {TODO, readTodo,ADD_TODO,addTodo, } from '../actions';
import {fork,put, takeEvery, all,call,take} from 'redux-saga/effects';
import {todo} from '../api';


export function* getTodos(){
    const todos = yield call(todo);

    // console.log('todos',todos);

    // todos.map(todo=>{
    //     put(addTodo(todos));
    // })
    const test = yield put(addTodo(todos));
    console.log('ss',test);

}



export function* createTodo(){
    //ひたすらADD_TODOがdispatchされるのを待つ処理
    //'ADD_TODO'アクションがdispatchされるまで、それより下の処理には進まない
    while (true) {
        const action = yield take(ADD_TODO);
        console.log(action);
        const todos = yield call(todo,action);

        console.log('todos',todos);

        // TODO: 下記のコードをdispatchする際に、todosではなく、todosの要素を個別でdispatchできるようにする
        const test = yield put(addTodo(todos));
        console.log('test',test);

        //dispatchする
        // todos.map(todo=>{
        //     console.log(todo);
        //     yield put(addTodo(todo));
        // });

        const {payload,error} = yield call(todo);
        if (payload && !error) {
            console.log('handleRequestTodos success');
        }else {
            console.log('handleRequestTodos error');
        }
    }

}


//下記のrootSaga()関数は、generator関数としての役割をもつ
//generator関数とは、アプリの起動時に最初の一回だけ実行される関数のこと。
export default function* rootSaga(){
    // yield fork(getTodos);
}
