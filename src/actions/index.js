import * as types from './actionTypes';

export const selectUser = (user) => {
    return {
        type: types.SELECT_USER,
        payload: user
    }
}

export const removeUser = (id) => {
    return {
        type: types.REMOVE_USER,
        payload: id
    }
}

export const actSubmitForm = (item) => {
	return {
		type : types.SUBMIT_FORM,
		payload: item
	}
}

// export const addUser = (item) => {
//     return {
//         type: types.ADD_USER,
//         payload: item
//     }
// }