import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import {Provider} from 'react-redux';



const firstReducer  = (state = 100, action)=>{
        if(action.type === 'BUTTON_ONE'){
        console.log('here i am.. well here is reducer', action.type);
        return state -1
        }
        return state;
}

const secondReducer  = (state = 0, action)=>{
    if(action.type === 'BUTTON_TWO'){
        console.log('another one?', action.type);
        console.log('this is state 2,', state);
        return state + 1
    }
        return state;
}

const reducerThird  = (state = 78, action)=>{
    if(action.type === 'BUTTON_THREE'){
        console.log('another one?', action.type);
        console.log('this is state 3,', state);
        return state + 1
    }
        return state;
}

const fourthReducer = (state = [], action)=>{
    console.log('buttonFour!', state)
    switch(action.type){
        case 'BUTTON_FOUR':
            return [...state, action.payload];
        default:
            return state;
    }

}

const periodicTable  = (state = {type: 'apple'}, action)=>{
    if(action.type === 'ADD_ELEMENT'){
        console.log('ou can pick your molecules but you cant pick your element', action);
        console.log(state);
            if(state.type === 'apple'){
                return (state = {type: 'orange'});
            }
            else if(state.type === 'orange'){
                return (state = {type: 'apple'});
            }
    }
        return state;
}

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer,
        periodicTable,
        reducerThird,
        fourthReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
