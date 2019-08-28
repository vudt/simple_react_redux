// import {SELECT_USER} from '../actions/actionTypes';
import * as types from '../actions/actionTypes'

export default (state = {}, action) => {
    switch(action.type) {
        case types.SELECT_USER:
            return action.payload;
        default:
            return null
    }
}