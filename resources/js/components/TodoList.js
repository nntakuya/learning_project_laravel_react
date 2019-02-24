import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import {readTodo,addTodo} from '../actions'


class TodoList extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount(){
        const {readTodo,onAddTodo,fetchTodo,editTodo} = this.props;
        fetchTodo('sample text');
    }

    render(){
        const {editTodo,deleteTodo} = this.props;

        return(
            <ul>
                {this.props.todos.map(res=>{
                    return <Todo
                                key={res.id}
                                id={res.id}
                                title={res.title}
                                onEditTodo ={editTodo}
                                onDeleteTodo={deleteTodo}
                            />
                })}
            </ul>
        )
    };
}

//下記の"todos"キーの値として、componentDidMountでLaravel APIから取得したデータをセットする
//引数のstateは、現在の状態を格納している変数
const mapStateTodProps = state => ({
    todos: state.todos
})

//connectで結び付けられたComponentクラスのプロパティとしてセットされる
//今回の場合だと、プロパティのonAddTodoに"(todo)=>dispatch(addTodo(todo))"としてセットされる
const mapDispatchToProps = dispatch =>({
    readTodo: ()=>dispatch(addTodo()),
    fetchTodo: (payload)=>dispatch({type:"GET_TODO_FETCH",payload}),
    onAddTodo: (todo)=>dispatch(addTodo(todo)),
    editTodo:(id,title,new_title)=>dispatch({type:"EDIT_TODO_FETCH",id:id,title:title,new_title:new_title}),
    deleteTodo:(id)=>dispatch({type:"DELETE_TODO_FETCH",id:id})
})

export default connect(mapStateTodProps,mapDispatchToProps)(TodoList);
