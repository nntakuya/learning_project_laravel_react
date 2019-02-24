import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './ModalLauncherStyle';
import Modal from '../../components/Modal/Modal';

class ModalLauncher extends Component {
     constructor(props){
          super(props);
          this.state = {
               showModal: false
          };
          console.log('ModalLauncher const',props);
     }

     handleToggleModal(){
          console.log('【ModalLauncher handleToggleModal before】',this.state);
          this.setState({ showModal: !this.state.showModal});
          console.log('【ModalLauncher handleToggleModal after】',this.state);
     }

     render(){
          const { buttonLabel, children, classes,onDeleteTodo } = this.props;
          const {showModal} = this.state;
          console.log('【ModalLauncher showModal】',onDeleteTodo);
          //【疑問】 下記のやり方は、良いのか疑問
          //  どうやら、showModalの評価がtrueの場合は "Modal"コンポーネントがそのまま評価される
          //  falseの場合、"Modal"コンポーネントを含めた評価がfalseとなり、結果としてModalコンポーネントが表示される
          console.log('【ModalLauncher testA 】',showModal &&(
               <Modal onCloseRequest={()=>this.handleToggleModal()}>
                    {children}
               </Modal>
          ));

          return(
               <div>
                    <button
                         type="button"
                         className={classes.modalButton}
                         onClick={()=>this.handleToggleModal()}
                    >
                         {buttonLabel}
                    </button>

                    {showModal && (
                         <Modal
                              onCloseRequest={()=>this.handleToggleModal()}
                              onDeleteTodo={onDeleteTodo}
                         >
                              {children}
                         </Modal>
                    )}
               </div>
          )
     }
}

ModalLauncher.propTypes = {
     buttonLabel: PropTypes.string.isRequired,
     children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node
     ]),
     sheet: PropTypes.object,
     classes: PropTypes.object
};

export default injectSheet(styles)(ModalLauncher);