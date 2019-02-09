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

            console.log('Reducer state',state);
            console.log('Reducer action',action);
            //"...state" : 現在の状態のデータ
            //"{}" : これか状態に追加するデータ
            console.log('...state',[...state,{todo_data:action.todo_data}]);

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
