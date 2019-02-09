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
        console.log('onAddTodo',onAddTodo);

        axios
            .get('/api/getTodos')
            .then((res)=>{
                // console.log('res.data',res.data);
                console.log('Before this.props',this.props);
                res.data.map(todo=>{
                    console.log('test',todo);
                    onAddTodo(todo);
                })
                console.log('After this.props',this.props);
            })
            .catch(error=>{
                console.log('componentDidMount error',error);
            })
    }

    render(){
        return (
            <ul>
                <li>sample text</li>
                <li>sample text</li>
                <li>sample text</li>
            </ul>
        );
    }
}

//下記の"todos"キーの値として、componentDidMountでLaravel APIから取得したデータをセットする
const mapStateTodProps = state => ({
    todos: state.todos
})

//connectで結び付けられたComponentクラスのプロパティとしてセットされる
//今回の場合だと、プロパティのonAddTodoに"(todo)=>dispatch(addTodo(todo))"としてセットされる
const mapDispatchToProps = dispatch =>({
    onAddTodo: (todo)=>dispatch(addTodo(todo))
})

export default connect(mapStateTodProps,mapDispatchToProps)(TodoList);
