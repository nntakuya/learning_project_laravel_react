import React from 'react';
import fetch from 'isomorphic-fetch';
// import  { put, takeEvery, all } from 'redux-saga/effects';

export function todo(sample){
    return fetch('/api/getTodos')
            .then(res =>res.json())
            .then(payload=>{
                payload;
                console.log(payload);
            })
            .catch(error=>{error});
}
