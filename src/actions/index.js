// import {SELECT_USER} from './actionTypes';
// import {ADD_USER} from './actionTypes';

import * as types from './actionTypes';

export const selectUser = (user) => {
    return {
        type: types.SELECT_USER,
        payload: user
    }
}

export const addUser = (item) => {
    return {
        type: types.ADD_USER,
        payload: item
    }
}
