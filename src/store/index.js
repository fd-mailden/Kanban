import {createStore, combineReducers} from "redux";
import {cardReduser} from './cardReduser';
import { boarderReduser } from './boarderReduser';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReduser =combineReducers({  

     cards: cardReduser,
     boards: boarderReduser,

});

export const store = createStore(rootReduser, composeWithDevTools());