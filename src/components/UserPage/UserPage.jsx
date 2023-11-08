// React
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import Nav from '../Nav/Nav';

// Styles
import './UserPage.css';

function UserPage() {
  const user = useSelector((store) => store.user);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('By-Name');
  const [showParameters, setShowParameters] = useState(false);

  const history = useHistory();

  const storeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSearchType(event.target.id);
  };

  const submitSearch = () => {
    if (searchType === 'By-Name') {
      history.push(`/resultsbyname/${search}`);
    } else if (searchType === 'By-Ingredient') {
      // Regex to delete space after comma to return search
      let newSearch = search.replace(/\s+/g, '');
      history.push(`/resultsbyingredient/${newSearch}`);
    }
  };

  const viewSaved = () => {
    history.push('/savedlist');
  };

  const createCocktail = () => {
    history.push('/create');
  };

  return (
    <div>
      <Nav />
      <div id="container">
        <h2 id="greeting">
          <span class="welcome-text">Welcome </span>
          <span class="username-text">{user.username}!</span>
        </h2>
        <input
          id="searchField"
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={storeSearch}>
        </input>
        <br />
        <div id="search-options">
          <form>
            <input
              type='radio'
              id='By-Name'
              name="searchType"
              value={searchType}
              onChange={handleRadioChange}
            ></input>
            <label for='By-Name'>By Name</label>
            <br />
            <input
              type='radio'
              id='By-Ingredient'
              name="searchType"
              value={searchType}
              onChange={handleRadioChange}
            >
            </input>
            <label for='By-Ingredient'>By Ingredient</label>
          </form>
          <div>
            <button id="search-button" onClick={submitSearch}>Search</button>
          </div>
        </div>
        {showParameters ? (
          <div><p id="params">Separate ingredients by comma, no spaces</p></div>
        ) : (<div></div>)}
        <br />
        <br />
        <button id="viewSaved" onClick={viewSaved}>Saved</button>
        <button id="createCocktail" onClick={createCocktail}>Create New Cocktail</button>
      </div>
    </div>
  );
}

export default UserPage;
