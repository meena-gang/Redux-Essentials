import {legacy_createStore} from 'redux';

const reducer = (state="light", action) => {
    switch(action.type){
        case 'TOGGLE':
            return state === 'light' ? 'dark' : 'light';
        default : return state;
    }
}

const store = legacy_createStore(reducer);

export default store;