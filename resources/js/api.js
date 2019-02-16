import React from 'react';
import fetch from 'isomorphic-fetch';
// import  { put, takeEvery, all } from 'redux-saga/effects';

// export function todo(sample){
//     console.log('sample',sample);
//     return fetch('/api/getTodos')
//             .then(res =>res.json())
//             .then(payload=>{
//                 return payload;
//                 // console.log('todo payload',payload);
//             })
//             .catch(error=>{
//                 return error
//             });
// }



//TODO
//fetch関数からaxios関数への変更



// const url = "/api/getTodos";

export default class TodoAPI {
    // const url = "/api/getTodos";

    static get(){
        return fetch('/api/getTodos')
            .then(res =>res.json())
            .then(payload=>{
                return payload;
            })
            .catch(error=>{
                return error
            });
    }


    static edit(payload){

    }

    static add(payload){

    }

    static delete(payload){

    }


}