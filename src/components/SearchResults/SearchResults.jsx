import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SearchResults () {
    const cocktailResults = useSelector(store => store.resultsReducer)
    const search = useSelector(store => store.searchReducer)

    const dispatch = useDispatch();
    const history = useHistory(); 

    const openCocktail = (cocktailId) => {
        dispatch({ type: 'OPEN_COCKTAIL_SAGA', payload: cocktailId })
        history.push(`/searchitem`);
        console.log(cocktailId);
    }

    return (
        <div>
            <h2>RESULTS FOR {search.toUpperCase()}</h2>
            <ul style={{ listStyleType: 'none' }}>
                {cocktailResults.map((result) => (
                <li key={result.idDrink}>
                    <h3>{result.strDrink.toUpperCase()}</h3>
                    <img 
                        src={result.strDrinkThumb} 
                        alt={result.strDrink} 
                        onClick={() => openCocktail(result.idDrink)}
                        width="125"
                        height="125"
                    />
                    {/* <p>Instructions: </p>
                        <p>{result.strInstructions}</p>
                    <p>Ingredients:</p>
                    <ul>
                        {result.strMeasure1 && result.strIngredient1 && (
                            <li>{result.strMeasure1}{result.strIngredient1}</li>
                        )}
                        {result.strMeasure2 && result.strIngredient2 && (
                            <li>{result.strMeasure2}{result.strIngredient2}</li>
                        )}
                        {result.strMeasure3 && result.strIngredient3 && (
                            <li>{result.strMeasure3}{result.strIngredient3}</li>
                        )}
                        {result.strMeasure4 && result.strIngredient4 && (
                            <li>{result.strMeasure4}{result.strIngredient4}</li>
                        )}
                        {result.strMeasure5 && result.strIngredient5 && (
                            <li>{result.strMeasure5}{result.strIngredient5}</li>
                        )}
                        {result.strMeasure6 && result.strIngredient6 && (
                            <li>{result.strMeasure6}{result.strIngredient6}</li>
                        )}
                        {result.strMeasure7 && result.strIngredient7 && (
                            <li>{result.strMeasure7}{result.strIngredient7}</li>
                        )}
                        {result.strMeasure8 && result.strIngredient8 && (
                            <li>{result.strMeasure8}{result.strIngredient8}</li>
                        )}
                        {result.strMeasure9 && result.strIngredient9 && (
                            <li>{result.strMeasure9}{result.strIngredient9}</li>
                        )}
                        {result.strMeasure10 && result.strIngredient10 && (
                            <li>{result.strMeasure10}{result.strIngredient10}</li>
                        )}
                        {result.strMeasure11 && result.strIngredient11 && (
                            <li>{result.strMeasure11}{result.strIngredient11}</li>
                        )}
                        {result.strMeasure12 && result.strIngredient12 && (
                            <li>{result.strMeasure12}{result.strIngredient12}</li>
                        )}
                    </ul> */}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;