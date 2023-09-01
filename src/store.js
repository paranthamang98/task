import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import beerReducer from './reducers';

const store = createStore(beerReducer, applyMiddleware(thunkMiddleware));

export default store;
