export const TODO = 'TODO';
export const ADD_TODO = 'ADD_TODO';

//Action Creators


export function readTodo(index){
    return{
        type:TODO,
        index
    }
}

//ここの引数のやり方を見直す必要がある
export function addTodo(todo_data){
    return {
        type:ADD_TODO,
        todo_data
    }
}
