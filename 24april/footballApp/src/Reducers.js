import {combineReducers} from 'redux';

const matchReducer = (state = [], action) => {
    console.log(action,'reducer');

    switch (action.type) {
        case 'ADD': return [...action.payload];
        case 'DELETE': return state.filter((item,i) => i != action.payload );
        default : return state;
    } 
}

const fetchReducer = (state={isLoading :false, isError : false}, action) => {
    switch(action.type){
    case 'FETCH' : return {...state, isLoading:true};
    case 'FETCHED' : return {...state, isLoading:false};
    case 'ERROR' : return { isLoading:false, isError:true}
    default : return state;
    }
}

const rootReducer = combineReducers({
    match : matchReducer,
    fetch : fetchReducer
});

export default rootReducer;