import {TODO,ADD_TODO} from '../actions'

//test
const initialState = {
    data:{
        todo:[],
    }
}


const todos = (state=[],action)=>{
    switch (action.type) {
        case ADD_TODO:
            console.log('reducers ADD_TODO');
            console.log(action.todo_data);
            // console.log('Reducer state',state);
            // console.log('Reducer action',action);
            //1. "...state" : 現在の状態のデータ
            //2. "{}" : これか状態に追加するデータ
            //'1'と"2"を配列で連結した上で、returnしている
            // console.log('...state',[...state,{todo_data:action.todo_data}]);

            const test = [
                ...state,
                {
                    todo_data:action.todo_data
                }
            ]
            console.log('test',test);

            return test

        case TODO:
            console.log('reducers TODO');

        default:
            return state
    }
}

export default todos;
