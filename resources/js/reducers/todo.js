import {TODO,ADD_TODO} from '../actions'



const todos = (state=[],action)=>{
    switch (action.type) {
        case ADD_TODO:
            //1. "...state" : 現在の状態のデータ
            //2. "{}" : これか状態に追加するデータ
            //'1'と"2"を配列で連結した上で、returnしている

            const test = [
                ...state,
                {
                    todo_data:action.todo_data
                }
            ]

            return test

        case TODO:

        //アプリ初期読み込み時にTODOデータをDBから取得
        case 'GET_TODO_PUT':

            return action.response

        //【テスト】下記のCASEでやること
        //・stateが現在のtodoプロパティなのかを確認
        //・actionがフォーム入力した値なのかをチェック
        //・return関数の引数は [] ではなく、{}な気がする
        case 'TODO_ADD':
            const todo = action.response;
            // const todo = action.todo;
            // return[
            //     ...state,
            //     todo
            // ];
            return state;

        // case 'SUBMIT_FORM':
        //     console.log('【Reducers SUBMIT_FORM】',action);

        //     return action;








        case 'TODOS_EDIT':
            return state.map(todo =>
                Number(todo.id) === Number(action.todos.id) ?
                    {...action.todo} : todos);

        case 'TODOS_DELETE':
            return state.filter(todo =>
                Number(todo.id) !== Number(action.todo.id));

        default:
            return state
    }
}

export default todos;
