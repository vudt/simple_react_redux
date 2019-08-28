import * as types from '../actions/actionTypes';
// import {Users} from '../constants/users';

const uuidv4 = require('uuid/v4');

const addItem = (state = [], action) => {
    switch(action.type) {
        case types.ADD_USER:
            let item = {id: uuidv4(), ...action.payload}
            return {...state, item}
        default:
            return state;
    }
    return state;
}

export default addItem;