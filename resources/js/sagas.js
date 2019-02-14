import React from 'react';
import {addTodo} from './actions';
import {fork,put, takeEvery, all,call} from 'redux-saga/effects';
import {todo} from './api';

export function* handleRequestUser(){
    yield call(todo);
}

//下記のrootSaga()関数は、generator関数としての役割をもつ
//generator関数とは、アプリの起動時に最初の一回だけ実行される関数のこと。
export default function* rootSaga(){
    console.log(fork(handleRequestUser));
    yield fork(handleRequestUser);
}
