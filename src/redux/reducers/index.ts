import { combineReducers } from 'redux';
import userReducer from './user';
// import wallet from './wallet';
const rootReducer = combineReducers({ user: userReducer });
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

export default rootReducer;
