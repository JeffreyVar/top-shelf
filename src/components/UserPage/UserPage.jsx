import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// import './UserPage.css';

function UserPage() {
  const user = useSelector((store) => store.user);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch(); // Define dispatch
  const history = useHistory(); 

  const storeSearch = (event) => {
    setSearch(event.target.value);
    dispatch({ type: 'STORE_SEARCH', payload: event.target.value})
  };

  const submitSearchByName = () => {
    // dispatch({ type: 'SEARCH_NAME_SAGA', payload: search })
    history.push(`/results/${search}`);
    console.log(search);
  };

  const submitSearchByIngredient = () => {
    dispatch({ type: 'SEARCH_INGREDIENT_SAGA', payload: search })
    history.push('/results');
    
  };

  // const submitSearchByIngredient = () => {
  //   axios.post('/search_by_ingredient', {search})
  //   .then((response) => {
  //     const apiResponse = response.data;
  //     dispatch({ type: 'SEARCH_RESULTS', payload: apiResponse.drinks})
  //     history.push('/results');
  //     console.log(apiResponse.data);
  //   })
  //   .catch((error) => {
  //     console.log('error', error);
  //   });
  // };

  const viewSaved = () => {
    history.push('/savedlist');
  };

  const createCocktail = () => {
    history.push('/create');
  };

  return (
    <div className="container">
      <h2 id="greeting">Hi {user.username}!</h2>
      <input
        id="searchField"
        type="text"
        placeholder="Search cocktails..." 
        value={search}
        onChange={storeSearch}></input>
        <br/>
      <button id="searchByName" onClick={submitSearchByName}>Search</button>
      {/* <button onClick={submitSearchByIngredient}>Search by Ingredient</button> */}
      <br/>
      <br/>
      <br/>
      <button id="viewSaved" onClick={viewSaved}>Saved</button>
      <br/>
      <button id="createCocktail" onClick={createCocktail}>Create New Cocktail</button>
      {/* <p>Your ID is: {user.id}</p> */}
      <br/>
      <br/>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
