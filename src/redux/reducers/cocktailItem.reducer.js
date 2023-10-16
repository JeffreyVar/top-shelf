const cocktailItemReducer = (state = [], action) => {
    if (action.type === 'SET_COCKTAIL') {
        return action.payload
    }
    return state;
  };
  
  export default cocktailItemReducer;