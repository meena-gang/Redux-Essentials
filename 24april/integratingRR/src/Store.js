import {legacy_createStore} from 'redux';


const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': return [...state, action.payload];
        case 'DELETE_TODO': return state.filter(todo => todo.id != action.payload);
        case 'UPDATE_TODO': return state.map(todo => todo.id==action.payload ? {...todo, status : !todo.status} : todo)
        default : return state;
    } 
}

const store = legacy_createStore(reducer);


export default store;
