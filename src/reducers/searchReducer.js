export default (state = null, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return action.payload;
        default:
            return state;
    }
};
