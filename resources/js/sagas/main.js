import {fork,takeEvery,takeLatest} from 'redux-saga/effects';
import {
     todosFetchList,
     todosAdd,
     todosEdit,
     todosDelete} from './todo'

export default function* rootSaga(){
     yield takeEvery('GET_TODO_FETCH',todosFetchList);
     // yield fork(todosFetchList);
}
