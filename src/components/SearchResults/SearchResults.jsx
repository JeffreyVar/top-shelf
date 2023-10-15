import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function SearchResults () {
    const cocktailResults = useSelector(store => store.resultsReducer)
    const search = useSelector(store => store.searchReducer)

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
      <h2>Results for {search}</h2>
      <ul>
        {cocktailResults.map((result) => (
          <li key={result.idDrink}>
            <h3>{result.strDrink}</h3>
            <img src={result.strDrinkThumb} alt={result.strDrink} />
            <p>Instructions: {result.strInstructions}</p>
            <p>Ingredients:</p>
            <ul>
                {result.strMeasure1}{result.strIngredient1}
                {result.strMeasure2}{result.strIngredient2}
                {result.strMeasure3}{result.strIngredient3}
                {result.strMeasure4}{result.strIngredient4}
                {result.strMeasure5}{result.strIngredient5}
                {result.strMeasure6}{result.strIngredient6}
                {result.strMeasure7}{result.strIngredient7}
                {result.strMeasure8}{result.strIngredient8}
                {result.strMeasure9}{result.strIngredient9}
                {result.strMeasure10}{result.strIngredient10}
                {result.strMeasure11}{result.strIngredient11}
                {result.strMeasure12}{result.strIngredient12}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;