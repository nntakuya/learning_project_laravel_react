import React from 'react';
import fetch from 'isomorphic-fetch';

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
        console.log('【TodoAPI edit】',payload);
        return fetch(
            '/api/editTodo',
            {
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json, text-plain, */*",
                    'X-Requested-With':"XMLHttpRequest",
                },
                method:'POST',
                body:JSON.stringify({
                    id:payload.id,
                    new_title:payload.new_title
                })
            }
        )
        // .then(res=>res.json())
        // .then(res=>{
        //     // console.log('【api.js edit payload success】',res);
        //     // return {data:res}
        // })
        // .catch(error=>{
        //     console.log(error);
        //     return error;
        // })
    }


    static delete(payload){
        console.log('【api.js delete】',payload.id);

        return fetch(
            '/api/deleteTodo',
            {
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json,text-plain,*/*",
                    "X-Requested-With":"XMLHttpRequest",
                },
                method:'POST',
                body:JSON.stringify({
                    id:payload.id,
                })
            }
        )
    }


}