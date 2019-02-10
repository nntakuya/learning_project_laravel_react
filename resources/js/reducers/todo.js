import {ADD_TODO} from '../actions'

//test
const initialState = {
    data:{
        todo:[],
    }
}


const todos = (state=[],action)=>{

    switch (action.type) {
        case ADD_TODO:

            // console.log('Reducer state',state);
            // console.log('Reducer action',action);
            //1. "...state" : 現在の状態のデータ
            //2. "{}" : これか状態に追加するデータ
            //'1'と"2"を配列で連結した上で、returnしている
            // console.log('...state',[...state,{todo_data:action.todo_data}]);

            return [
                ...state,
                {
                    todo_data:action.todo_data
                }
            ]

        default:
            return state
    }
}

export default todos;
