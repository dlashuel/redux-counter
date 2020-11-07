import { createStore } from 'redux';

const intialState = {
    count: 0,
    date: 'Monday',
    month: 'April'
};

const reducer = (state = intialState, action)=> {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1})
        case 'DECREMENT': 
            return { ...state, count: state.count - 1 }
        case 'MULTIPLY':
            return {...state, count:state.count *5}
        default:
            return state;
    }
    return state;
}

const store = createStore(reducer);

export default store;



