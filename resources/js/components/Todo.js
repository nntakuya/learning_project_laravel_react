import React from 'react';
import PropTypes from 'prop-types';

// const Todo = (props) =>(
//     <li>{props.title}</li>
// )
class Todo extends React.Component{
    constructor(props){
        super();
        // console.log('【Todo Component】',props);
    }


    render(){
        const {id,title,onEditTodo} = this.props;
        console.log('tes',id);

        return (
            <li>
                {title}
                <br/>
                <button onClick={e => onEditTodo(id,title)}>編集</button>
            </li>
        );
    }
}

export default Todo;
