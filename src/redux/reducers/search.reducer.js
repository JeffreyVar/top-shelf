const searchReducer = (state = '', action) => {
    if (action.type === 'STORE_SEARCH') {
        return action.payload
    }
    return state;
};
  
export default searchReducer;