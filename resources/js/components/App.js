import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList'

const App = () =>{
    return (
        <div>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App;
