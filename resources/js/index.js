import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools());



render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('todoApp')
)
