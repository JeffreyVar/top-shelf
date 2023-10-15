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

  const submitSearchByName = () => {
    axios.post('/search_by_name', {search})
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
    history.push('/saved');
  };

  return (
    <div className="container">
      <h2>Hi {user.username}!</h2>
      <input
        type="text"
        placeholder="Search cocktails" 
        value={search}
        onChange={storeSearch}></input>
        <br/>
      <button onClick={submitSearchByName}>Search by Name</button>
      {/* <button onClick={submitSearchByIngredient}>Search by Ingredient</button> */}
      <br/>
      <br/>
      <br/>
      <button onClick={viewSaved}>View Saved Recipes</button>

      {/* <p>Your ID is: {user.id}</p> */}
      <br/>
      <br/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
