import {combineReducers} from 'redux';
import todos from './todo';
import {reducer as reduxFormReducer } from 'redux-form'

const todoApp = combineReducers({
    todos,
    form: reduxFormReducer
});

export default todoApp;
