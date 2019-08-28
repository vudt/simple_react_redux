// import {Users_Data} from '../constants/users';

import * as types from '../actions/actionTypes'
const uuidv4 = require('uuid/v4');

let initialState = [
    {
        id: uuidv4(),
        fullname: 'Vu Dang',
        age: 29
    },
    {
        id: uuidv4(),
        fullname: 'Messi',
        age: 32
    },
    {
        id: uuidv4(),
        fullname: 'Ronaldo',
        age: 34
    },
    {
        id: uuidv4(),
        fullname: 'Neymar',
        age: 27
    }
];


export default(state = initialState, action) => {
    switch(action.type) {
        case types.SUBMIT_FORM:
            let item = action.payload;    
            if (action.payload.id !== '') {
                state[state.findIndex(el => el.id === item.id)] = {...action.payload}
                return [...state];
            } else {
                item = {...action.payload, id: uuidv4()}
                return [...state, item];
            }
        case types.REMOVE_USER:
            state = state.filter((item) => item.id !== action.payload)
            return [...state];
        default:
            return state;
    }
}
