import auth from '../auth';
export const setSearchData = (searchData) => {
    return { type: 'SET_DATA', payload: searchData };
};

export const setFilterData = (filters) => {
    return { type: 'SET_FILTERS', payload: filters };
};

export const setUser = () => async (dispatch, getState) => {
    const user = await auth();
    if (user) {
        dispatch({ type: 'SET_USER', payload: user.data });
    }
};

export const isAuthorized = () => async (dispatch, getState) => {
    const user = await auth();
    if (user.data) {
        dispatch({ type: 'CHECK_AUTH', payload: true });
    } else {
        dispatch({ type: 'CHECK_AUTH', payload: false });
    }
};
