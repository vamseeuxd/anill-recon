import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas-root'
import rootReducer from "./reducer-root";
import {composeWithDevTools} from 'redux-devtools-extension';

// we need an initialState otherwise , store will freak out
const initialState = {}

const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
export const store = createStore(
    rootReducer,
    initialState,
    // eslint-disable-next-line no-undef
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store;
