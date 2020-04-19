const INITIAL_STATE = {
    gluten: false,
    vegan: false,
    vegetarian: false,
    pescatarian: false,
    healthy: false,
    dairyFree: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_FILTERS':
            return { ...state, ...payload };
        default:
            return state;
    }
};
