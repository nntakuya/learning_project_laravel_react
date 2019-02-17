import {fork,takeEvery,takeLatest} from 'redux-saga/effects';
import {
     todosFetchList,
     todosAdd,
     handleSubmitForm,
     todosEdit,
     todosDelete} from './todo'

export default function* rootSaga(){
     yield takeEvery('GET_TODO_FETCH',todosFetchList);
     yield takeEvery('ADD_TODO_FETCH',todosAdd);
     yield fork(handleSubmitForm);
     // yield fork(todosFetchList);
}