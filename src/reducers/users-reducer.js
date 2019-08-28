// import {Users_Data} from '../constants/users';
// import * as types from '../actions';

// export default(state = [], action) => {

// }



const uuidv4 = require('uuid/v4');

export default () => {
    return [
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
    ]
}