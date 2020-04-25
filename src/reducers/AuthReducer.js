const INITIAL_STATE = false;

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'CHECK_AUTH':
            return payload;
        default:
            return state;
    }
};
