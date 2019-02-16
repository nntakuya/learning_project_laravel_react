import { call, put } from 'redux-saga/effects';
import TodoAPI from '../api';

export function* todosFetchList(action){
    console.log('【/sagas】todoFetchList');
    const response = yield call(TodoAPI.get);
    console.log('response',response);
    response.map(res=>{
        console.log('detail',res);
        // yield put({type:'GET_TODO_PUT',res});
    })
    console.log('detail',response);
    const payload = response ? response : {};
    const payload1 = payload[0];
    console.log('payload',payload1);
    yield put({type:'GET_TODO_PUT',payload1});
}

// export function* todosEdit(action){
//     yield call(TodoAPI.edit,action.todo);
//     yield put({type:'TODO_SAVE',todo:action.todo});
//     action.callbackSuccess();
// }

// export function* todosAdd(action){
//     yield call(TodoAPI.add,action.todo);
//     yield put({type:'TODO_ADD',todo:action.todo});
//     action.callbackSuccess();
// }

// export function* todosDelete(action){
//     yield call(TodoAPI.delete,action.todo);
//     yield put({type: 'TODO_DELETE',todo:action.todo});
//     action.callbackSuccess();
// }
