import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagamiddlerware from 'redux-saga';
import rootSaga from './sagas'
// console.log(rootSaga);

// const store = createStore(
//     rootReducer,
//     composeWithDevTools()
// );

// export default function configureStore(initialState){
//     const sagaMiddleware = createSagamiddlerware();
//     const store = createStore(
//         rootReducer,
//         initialState,
//         composeWithDevTools(),
//         applyMiddleware(
//             sagaMiddleware,logger()
//         )
//     );
//     sagaMiddleware.run(rootSaga);
//     return store;
// };

const initialState = {};
const sagaMiddleware = createSagamiddlerware();
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        composeWithDevTools,
        sagaMiddleware,
        logger,
    )
);
// sagaMiddleware.run();
sagaMiddleware.run(rootSaga);
export default store;
