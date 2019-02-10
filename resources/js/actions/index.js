export const ADD_TODO = 'ADD_TODO'

//Action Creators

//ここの引数のやり方を見直す必要がある
export function addTodo(todo_data){

    return {
        type:ADD_TODO,
        todo_data
    }
}
