const resultsReducer = (state = [], action) => {
    if (action.type === 'SEARCH_RESULTS') {
        console.log(action.payload);
        return action.payload
    }
    return state;
};
  
export default resultsReducer;