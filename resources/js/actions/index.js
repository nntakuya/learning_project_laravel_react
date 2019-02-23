export const TODO = 'TODO';
export const ADD_TODO = 'ADD_TODO';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

//Action Creators


export function readTodo(index){
    return{
        type:TODO,
        index
    }
}

//ここの引数のやり方を見直す必要がある
export function addTodo(todo_data){
    return {
        type:ADD_TODO,
        todo_data
    }
}


export function submitForm(params){
    console.log('【Action index submitForm】',params);

    return{
        type: SUBMIT_FORM,
        payload: {params}
    }
}

export function showModal(modalProps,modalType){
    return {
        type:SHOW_MODAL,
        modalProps,
        modalType
    };
}

export function hideModal(){
    return {
        type:HIDE_MODAL
    };
}