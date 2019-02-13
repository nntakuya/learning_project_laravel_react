import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store'
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import createSagamiddlerware from 'redux-saga';
// import rootSaga from './sagas'

// const store = createStore(
//     rootReducer,
//     composeWithDevTools()
// );


render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('todoApp')
)
