const resultsReducer = (state = [], action) => {
    if (action.type === 'SEARCH_RESULTS') {
        return action.payload
    }
    return state;
};
  
export default resultsReducer;