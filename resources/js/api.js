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

    static add(payload){
        console.log('【api.js add payload】',payload);
        let data = {
            name:'takuya'
        };
        //(TODO)下記の処理にcsrf対策を施す必要がある。
        return fetch(
                    '/api/createTodo',
                    {
                        headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json, text-plain, */*",
                        "X-Requested-With": "XMLHttpRequest",
                        // "X-CSRF-TOKEN": token
                       },
                        method:'POST',
                        body:JSON.stringify({
                            title:payload.title,
                          })
                    }
                )
                .then(res=>res.json())
                .then((res)=>{
                    console.log('【api.js add payload success】',res);
                    return {data:res.title};
                })
                .catch(error=>{
                    console.log('【api.js add payload】',error);
                    return error;
                })
    }

    static edit(payload){

    }


    static delete(payload){

    }


}