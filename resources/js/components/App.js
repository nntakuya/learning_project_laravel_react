import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList'

class App extends React.Component {

    constructor(props){
        super();
    }

    // render(){
    //     return (
    //         <div>
    //             <AddTodo />
    //         </div>
    //     );
    // }

    render(){
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    }

}

export default App;
