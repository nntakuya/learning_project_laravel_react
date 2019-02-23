import React from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';

const mapStateToProps = state => ({
     ...state.modal
})

class ModalContainer extends React.Component {
     constructor(props){
          super(props);
          console.log('initial value',props);

          this.state={
               modalIsOpen:false
          };
          this.closeModal = this.closeModal.bind(this);
     }

     componentWillReceiveProps(nextProps){
          console.log('componentWillReceiveProps nextProps',nextProps);

          if (nextProps !== this.props) {
               this.setState({
                    modalIsOpen: nextProps.modalProps.open
               })
          }
     }

     closeModal(){
          console.log('closeModal');
          console.log(this.props);
          console.log('Before state',this.state);
          this.setState({modalIsOpen:false})
          console.log('After state',this.state);

     }

     render(){
          if(!this.props.modalType){
               return null;
          }
          return (
               <div>
                    <ReactModal
                         isOpen={this.state.modalIsOpen}
                         // onAfterOpen={this.onAfterOpenModal}
                         onRequestClose = {this.closeModal}
                         contentLabel = "Example Modal"
                         ariaHideApp = {false}
                    >
                         <h2 ref={subtitle=>this.subtitle = subtitle}>Hello</h2>
                         <button onClick={this.closeModal}>close</button>
                         <div>I am a modal</div>
                         {/* <form>
                              <input type="text"/>
                              <button>tab nabigation</button>
                              <button>stays</button>
                              <button>inside</button>
                              <button>the modal</button>
                         </form> */}
                    </ReactModal>
               </div>
          )
     }
}

export default connect(mapStateToProps,null)(ModalContainer);