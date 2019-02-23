import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#deleteTodo');

const customStyles = {
     overlay:{
          zIndex:"100",
          backgroundColor:"rgba(0,0,0,0.5)"
     },
     content:{
          top:"50",
          left:"50",
          right:"auto",
          bottom:"auto",
          marginRight:"-50",
          padding:"0",
          transform:"translate(-50%,-50%)"
     }
};


class DeleteModal extends React.Component {
     constructor(){
          super();
          this.state={
               showModal: false
          }
          this.handleOpenModal = this.handleOpenModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.binde(this);
          this.handleCloseModal = this. handleCloseModal.bind(this);
     }

     handleOpenModal(){
          this.setState({showModal:true});
     }

     afterOpenModal(){

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