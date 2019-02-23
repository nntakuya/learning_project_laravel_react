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
        // console.log(props);
        // const {classes} = props
        // console.log('sample',classes);
        // this.openAlertModal = this.openAlertModal.bind(this);
    }

    // openAlertModal(event){
    //     //下記のcloseModalメソッドは認識されない気がする
    //     console.log('openAlertModal prpos',this.props);

    //     this.props.showModal({
    //         open:true,
    //         title:'Alert Modal',
    //         message:'Message',
    //         // closeModal:this.closeModal
    //     },'alert')
    // }



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
                    <button onClick={e => onDeleteTodo(id)}>削除</button>
                    <ModalLauncher buttonLabel="Open Modal">
                        <div className={classes.textModal}>
                            <h2> {title} </h2>
                        </div>
                    </ModalLauncher>
                    {/* <button onClick={this.openAlertModal}>削除</button> */}
                </form>
            </li>
        )
    }
}

// const mapDispatchToProps = dispatch =>({
//     hideModal:()=>dispatch(hideModal()),
//     showModal:(modalProps,modalTypes)=>{
//         // console.log('test showmodal',modalTypes);
//         dispatch(showModal(modalProps,modalTypes))
//     }
// })

// export default connect(null,mapDispatchToProps)(Todo);
// export default Todo;

const StyledTodo = injectSheet(styles)(Todo);
export default StyledTodo;
