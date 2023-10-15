import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UserPage() {
  const user = useSelector((store) => store.user);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch(); // Define dispatch
  const history = useHistory(); 

  const storeSearch = (event) => {
    setSearch(event.target.value);
    dispatch({ type: 'STORE_SEARCH', payload: event.target.value})
  };

  const submitSearch = () => {
    axios.post('/search', {search})
    .then((response) => {
      const apiResponse = response.data;
      dispatch({ type: 'SEARCH_RESULTS', payload: apiResponse.drinks})
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
        placeholder="Search cocktails" 
        value={search}
        onChange={storeSearch}></input><button onClick={submitSearch}>Search</button>
      {/* <p>Your ID is: {user.id}</p> */}
      <br/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
