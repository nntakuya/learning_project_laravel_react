import { call, put,take,fork } from 'redux-saga/effects';
import TodoAPI from '../api';
import {SUBMIT_FORM} from '../actions';
import {startSubmit, stopSubmit, reset} from 'redux-form';


export function* todosFetchList(action){
    const response = yield call(TodoAPI.get);

    // const payload = response ? response : {};
    yield put({type:'GET_TODO_PUT',response});
}

export function* todoEdit(payload){
    console.log('/sagas.js/todo.js',payload);
    yield call(TodoAPI.edit,payload);
    // yield put({type:'TODO_SAVE',todo:action.todo});
    // action.callbackSuccess();
}

export function* todoDelete(action){
    console.log('【sagaFunction todoDelete',action);
    yield call(TodoAPI.delete,action);
    // yield put({type: 'TODO_DELETE',todo:action.todo});
    // action.callbackSuccess();
}

export function* todosAdd(action){
    console.log('【sagaFunction todosAdd】',action);

    yield call(TodoAPI.add,action.todo);
    // yield put({type:'TODO_ADD',todo:action.todo});
    // action.callbackSuccess();
}

export function* handleSubmitForm(){
    console.log('【handleSubmitForm】');
    while (true) {
        const action = yield take(SUBMIT_FORM);
        const {params} = action.payload;

        yield put(startSubmit('contentForm'));

        const {data,error} = yield call(TodoAPI.add,params);
        // console.log('【saga/todo.js reutrn data】',data);

        if (data && !error) {
            console.log('success');
            yield put(stopSubmit('contentForm'));

            //課題：おそらく現状の状態だと、stateの恩恵を活かせていない
            //componentのkey要素を効率的に処理する方法を考えるべき
            //TODO
            //現状；DBから全てのデータを取得し、TodoList内のTodoコンポーネントを総入れ替えしている状態
            //理想：追加したTodoコンポーネントのみTodoList内の最後のコンポーネントの次に追加する
            yield fork(todosFetchList);
            //(テスト中、一旦保留)todo追加のactionを追加する処理をしたい
            // yield put({type:'TODO_ADD',response:'sample text'});

            // console.log('data.message',data.message);

            //おそらく下記で"reset"を実行しているのは、formの入力に
            //不備が会った場合に、初期値にセットするための可能性がある
            // yield put(reset('contentForm'));
        }else{
            console.log('fail');
            yield put(stopSubmit('contentForm'));
        }
    }
}


