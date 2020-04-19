export const setSearchData = (searchData) => {
    return { type: 'SET_DATA', payload: searchData };
};

export const setFilterData = (filters) => {
    return { type: 'SET_FILTERS', payload: filters };
};

export const setUser = (user) => {
    return { type: 'SET_USER', payload: user };
};
