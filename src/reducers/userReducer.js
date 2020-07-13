const INITIAL_STATE = null;

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
            return { ...state, ...payload };
        default:
            return state;
    }
};
