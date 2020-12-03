import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';

import { cartReducer } from './reducers/cartReducers';
import { 
  logoListReducer,
  logoDetailsReducer,
  logoSaveReducer,
  logoDeleteReducer } from './reducers/logoReducers';


const cartItems = Cookie.getJSON('cartItems') || [];
const initialState = {
  cart: { cartItems }
};
const reducer = combineReducers({
  logoList:  logoListReducer,
  logoDetails: logoDetailsReducer,
  logoSave: logoSaveReducer,
  logoDelete: logoDeleteReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
