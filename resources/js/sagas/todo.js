import { call, put } from 'redux-saga/effects';
import TodoAPI from '../api';


export function* todosFetchList(action){
    const response = yield call(TodoAPI.get);

    // const payload = response ? response : {};
    yield put({type:'GET_TODO_PUT',response});
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
