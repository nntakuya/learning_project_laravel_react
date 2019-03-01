import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {showModal,hideModal} from '../actions';
// import ModalWindow from '../containers/ModalContainer';
import ModalLauncher from '../containers/ModalLauncher/ModalLauncher';
import injectSheet from 'react-jss';
import styles from './TodoStyles';



class Todo extends React.Component{
    constructor(props){
        super();
    }


    render(){
        const {id,title,onEditTodo,onDeleteTodo,classes} = this.props;
        // console.log('test',this.props);

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
                    <button onClick={e => onEditTodo(id,title,new_title)}>編集です</button>
                    {/* <button onClick={e => onDeleteTodo(id)}>削除</button> */}
                </form>
                <ModalLauncher
                    buttonLabel="削除"
                    id={id}
                    onDeleteTodo={onDeleteTodo}
                >
                        <div className={classes.textModal}>
                            <h2> {title} </h2>
                        </div>
                </ModalLauncher>
            </li>
        )
    }
}


const StyledTodo = injectSheet(styles)(Todo);
export default StyledTodo;
