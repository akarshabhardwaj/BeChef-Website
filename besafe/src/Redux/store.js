import {
    legacy_createStore,
    compose,
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from "redux-thunk"

import { cartReducer } from './Cart/Cart.reducer'

const rootReducer = combineReducers({
    cart:cartReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))