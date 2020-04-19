import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';
import userReducer from './userReducer';
export default combineReducers({
    search: searchReducer,
    filters: filterReducer,
    user: userReducer
});
