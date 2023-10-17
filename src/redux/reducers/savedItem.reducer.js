const savedItemReducer = (state = {}, action) => {
    if (action.type === 'SET_SAVED_COCKTAIL') {
        return action.payload
    }
    return state;
  };
  
  export default savedItemReducer;