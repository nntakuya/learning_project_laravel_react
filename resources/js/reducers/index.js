import {combineReducers} from 'redux';
import todos from './todo';
import {reducer as reduxFormReducer } from 'redux-form'

//reducersは、コンポーネントのどこかで変更があった場合にすべてのreducersが働く仕様になっている
//なので、switch文でactionのtypeを引数に、分岐処理をする必要がある

// console.log('reducers/index.js',todos);

const todoApp = combineReducers({
    todos,
    form: reduxFormReducer
});

export default todoApp;
