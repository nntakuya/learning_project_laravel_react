import { call, put } from 'redux-saga/effects';
import TodoAPI from '../api';
import axios from 'axios';

function get(){
    axios({
        method:'get',
        url:'/api/getTodos'
    })
    .then(res=>{
        console.log('書き方',res)
        return res;
    })

    // axios
    //     .get('/api/getTodos')
    //     .then(res=>{
    //         console.log('axios get res',res);
    //         return res;
    //     })
    //     .catch(error=>{
    //         console.log('componentDidMount error',error);
    //     })
}


export function* todosFetchList(action){
    console.log('【/sagas】todoFetchList');
    // const response = yield call(get);
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
