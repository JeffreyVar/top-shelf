import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './UserPage.css';

function UserPage() {
  const user = useSelector((store) => store.user);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('By-Name');

  const dispatch = useDispatch(); // Define dispatch
  const history = useHistory(); 

  const storeSearch = (event) => {
    setSearch(event.target.value);
    dispatch({ type: 'STORE_SEARCH', payload: event.target.value})
  };

  const handleRadioChange = (event) => {
    setSearchType(event.target.id);
  };

  const submitSearch = () => {
    if (searchType === 'By-Name') {
      history.push(`/resultsbyname/${search}`);
    } else if (searchType === 'By-Ingredient') {
      history.push(`/resultsbyingredient/${search}`);
    }
  };

  // const submitSearchByName = () => {
  //   // dispatch({ type: 'SEARCH_NAME_SAGA', payload: search })
  //   history.push(`/resultsbyname/${search}`);
  //   console.log(search);
  // };

  // const submitSearchByIngredient = () => {
  //   history.push(`/resultsbyingredient/${search}`);
  //   console.log(search);    
  // };

  const viewSaved = () => {
    history.push('/savedlist');
  };

  const createCocktail = () => {
    history.push('/create');
  };

  return (
    <div id="container">
      <h2 id="greeting">
        <span class="welcome-text">Welcome </span>
        <span class="username-text">{user.username}!</span></h2>
      <input
        id="searchField"
        type="text"
        placeholder="Search recipes..." 
        value={search}
        onChange={storeSearch}>
      </input>
        <br/>
      <div id="search-options">
          <form>
            <input 
              type='radio' 
              id='By-Name' 
              name="searchType"
              onChange={handleRadioChange}
            ></input>
            <label for='By-Name'>By Name</label>
            <br/>
            <input 
              type='radio' 
              id='By-Ingredient' 
              name="searchType"
              onChange={handleRadioChange}
            >
            </input>
            <label for='By-Ingredient'>By Ingredient</label>
          </form>
          <div>
            <button id="search-button" onClick={submitSearch}>Search</button>
          </div>
      </div>
      <br/>
      <br/>
      <button id="viewSaved" onClick={viewSaved}>Saved</button>
      <button id="createCocktail" onClick={createCocktail}>Create New Cocktail</button>
      <br/>
      <br/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
