import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component{
    constructor(props){
        super();
    }



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
