import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import {addTodo} from '../actions'


class TodoList extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount(){
        const {onAddTodo} = this.props;

        axios
            .get('/api/getTodos')
            .then((res)=>{
                res.data.map(todo=>{
                    onAddTodo(todo);
                })
            })
            .catch(error=>{
                console.log('componentDidMount error',error);
            })
    }

    render(){
        return (
            <ul>
                {this.props.todos.map(todo=>(
                    console.log('key',todo.todo_data.id),
                    <Todo key={todo.todo_data.id} todos={todo}/>
                ))}
            </ul>
        );
    }
}

//下記の"todos"キーの値として、componentDidMountでLaravel APIから取得したデータをセットする
//引数のstateは、現在の状態を格納している変数
const mapStateTodProps = state => ({
    todos: state.todos
})

//connectで結び付けられたComponentクラスのプロパティとしてセットされる
//今回の場合だと、プロパティのonAddTodoに"(todo)=>dispatch(addTodo(todo))"としてセットされる
const mapDispatchToProps = dispatch =>({
    onAddTodo: (todo)=>dispatch(addTodo(todo))
})

export default connect(mapStateTodProps,mapDispatchToProps)(TodoList);
