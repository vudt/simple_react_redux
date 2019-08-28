import FoodReducer from './foods-reducer';
import UserReducer from './users-reducer';
import ActiveUserReducer from './active-user-reducer';
import AddUser from './add-user-reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    active_user: ActiveUserReducer,
    add_user: AddUser
});

export default allReducers;