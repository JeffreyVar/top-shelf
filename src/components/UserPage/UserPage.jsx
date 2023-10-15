import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const [search, setSearch] = useState('');
  // const [cocktailResults, setCocktailResults] = useState([])

  const dispatch = useDispatch(); // Define dispatch
  const history = useHistory(); 

  const storeSearch = (event) => {
    setSearch(event.target.value);
  }

  const submitSearch = () => {
    axios.post('/search', {search})
    .then((response) => {
      const apiResponse = response.data;
      // setCocktailResults(apiResponse.data);
      dispatch({ type: 'SEARCH_RESULTS', payload: apiResponse.data})
      history.push('/results');
      console.log(apiResponse.data);
    })
    .catch((error) => {
      console.log('error', error);
    });
  };

  return (
    <div className="container">
      <h2>Hi {user.username}!</h2>
      <input
        type="text"
        placeholder="Enter your search" 
        value={search}
        onChange={storeSearch}></input><button onClick={submitSearch}>Search</button>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
