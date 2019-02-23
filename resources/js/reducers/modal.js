
const initialState = {
     modalType:null,
     modalProps:{}
}

function modal(state = initialState,action) {
     switch (action.type) {
          case 'SHOW_MODAL':
               console.log('SHOW_MODAL',action);
               return {
                    modalType: action.modalType,
                    modalProps:action.modalProps
               }

          case 'HIDE_MODAL':
          console.log('SHOW_MODAL');
               return initialState;

          default:
               return state;
     }
}

export default modal;