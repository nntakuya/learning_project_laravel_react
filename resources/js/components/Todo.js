import React from 'react';
import PropTypes from 'prop-types';

// const Todo = (props) =>(
//     <li>{props.title}</li>
// )
class Todo extends React.Component{
    constructor(props){
        super();
        // console.log('【Todo Component】',props);
        // this.state={
        //     new_tilte:''
        // }
        // this.handleNewTodoTitile = this.handleNewTodoTitile.bind(this);
        // console.log('Todo',this);
    }

    // handleNewTodoTitile(new_tilte){
    //     console.log('【new_tilte】',new_tilte);
    //     this.setState({new_tilte});
    //     console.log(this);
    // }


    render(){
        const {id,title,onEditTodo} = this.props;
        let new_title;

        return (
            <li>
                <form onSubmit={e=>{e.preventDefault()}}>
                    <input
                        type="text"
                        name="new_tilte"
                        defaultValue={title}
                        onChange={ e => new_title = e.target.value }
                    />
                    <br/>
                    <button onClick={e => onEditTodo(id,title,new_title)}>編集</button>
                </form>
            </li>
        )
    }
}

export default Todo;
