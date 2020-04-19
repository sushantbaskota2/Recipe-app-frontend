const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_FILTERS':
            return { ...state, ...payload };
        default:
            return state;
    }
};
