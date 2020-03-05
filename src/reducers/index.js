import { combineReducers } from 'redux';

export default combineReducers({
    replaceMe: (state, action) => {
        if (action.type === 'QUERY') {
            return 5;
        }
        return 5;
    }
});
