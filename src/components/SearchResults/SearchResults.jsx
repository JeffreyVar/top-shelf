import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function SearchResults () {
    const cocktailResults = useSelector(store => store.resultsReducer)

    // const [favorite, setFavorite] = useState({})
    // const favoriteGif = (gif) => {
    //     setFavorite(gif);
    //     console.log(favorite);
    // }

    return (
    //     <div>
    //         <h2>Search Results</h2>
    //          {cocktailResults.map((result) => {
    //         return <li> </li>
    //   })}
    //     </div>

    <div>
      <h2>Search Results</h2>
      <ul>
        {cocktailResults.map((result) => (
          <li key={result.idDrink}>
            <h3>{result.strDrink}</h3>
            <img src={result.strDrinkThumb} alt={result.strDrink} />
            <p>Instructions: {result.strInstructions}</p>
            <p>Ingredients:</p>
            <ul>
              {result.strIngredient1}
              {result.strIngredient2}
              {result.strIngredient3}
              {result.strIngredient4}
              {result.strIngredient5}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;