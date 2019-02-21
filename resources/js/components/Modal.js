import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#deleteTodo');

class DeleteModal extends React.Component {
     constructor(){
          super();
          this.state={
               showModal: false
          }
          this.handleOpenModal = this.handleOpenModal.bind(this);
          this.handleCloseModal = this. handleCloseModal.bind(this);
     }

     handleOpenModal(){
          this.setState({showModal:true});
     }

     handleCloseModal(){
          this.setState({showModal:false});
     }

     render(){
          return(
               <div>
                    <button onClick={this.handleOpenModal}>Trigger Modal</button>
                    <ReactModal
                         isOpen = {this.state.showModal}
                         contentLabel="Minimal Modal Example"
                    >
                         <button onClick={this.handleCloseModal}>Close Modal</button>
                    </ReactModal>
               </div>
          )
     }
}

export default DeleteModal;
// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'));